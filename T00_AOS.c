// T00_AOS.c
// Script Summary:
// This script simulates a user journey involving three main transactions: HomePage, Shop, and Purchase.
// It incorporates advanced dynamic behavior to simulate realistic load conditions and system degradation.
//
// Workflow Summary:
// 1. Initializes scenario start time in vuser_init for global time tracking.
// 2. In T00_AOS, it retrieves Vuser details (ID, group, scenario ID) and a base 'TranTime' attribute.
// 3. Dynamically adjusts the 'wait_time' based on the Vuser's ID, simulating increasing response times
//    for higher Vuser counts, characteristic of a ramp-up test.
// 4. Executes the "T01_HomePage" transaction, introducing a dynamic delay based on adjusted 'wait_time'
//    and a parameterized value '{HowLong}'.
// 5. Executes the "T02_Shop" transaction, with a longer dynamic delay, also influenced by 'wait_time' and '{HowLong}'.
// 6. Executes the "T03_Purchase" transaction, featuring a complex delay mechanism that quadratically
//    increases with the scenario's running time, simulating system performance degradation under sustained load.
// 7. Includes conditional logic to simulate a transaction failure for "T03_Purchase" based on a '{FailRate}'
//    parameter, using a 'web_reg_find' on a 'web_url' call designed to fail.
// 8. Provides an option to conditionally abort the Vuser based on a '{ScriptAbort}' parameter.
//
// Key Operations:
// - Transaction management: lr_start_transaction, lr_end_transaction.
// - Dynamic delays: sleep function with calculated values.
// - Parameterization: lr_get_attrib_double, lr_eval_string, atoi, atof.
// - Vuser identification: lr_whoami.
// - Time tracking: time function for scenario duration.
// - Failure simulation: web_reg_find, web_url.
// - Scenario control: lr_abort.
//
// Data Handling:
// - Uses scenario attributes ('TranTime') for base wait times.
// - Utilizes parameterized values ('{HowLong}', '{FailRate}', '{ScriptAbort}') for flexible control
//   over delays, failure rates, and Vuser abortion.
// - No explicit correlation is present in this action.
//
// Overall Assessment:
// This script is designed for robust stress and resilience testing. It effectively models a user's
// interaction with an application while introducing realistic performance characteristics such as
// increasing load impact and time-based degradation. The failure simulation and abort mechanisms
// allow for testing error handling and Vuser behavior under adverse conditions.
//
int DBG = 1;
double atof();
// for class
// another comment
T00_AOS()
{
	int i,vuId;
	double wait_time;
	int id, scid;
	char *vuser_group;
	time_t scenarioCurrentTime;
	time_t runningTime;
	double slowOverTime;
	
	
	lr_whoami(&id, &vuser_group, &scid); // id = -1 when run from vugen
	
	wait_time=lr_get_attrib_double("TranTime"); // assumed in seconds
// if you run a ramp test of > 50 users, all transactions will slow with increasing load!
	if (id <10 ) {	wait_time = wait_time + .1;
	} else if (id < 20) {
		wait_time = wait_time + .2;
	} else if (id < 30) {
		wait_time = wait_time + .5;
	} else if (id < 40) {
		wait_time = wait_time + .8;
	} else if (id < 50) {
		wait_time = wait_time + 1.2;
	} else {
		wait_time = wait_time + 2.5;
	}
//

	lr_start_transaction("T01_HomePage");
	sleep( (int)(wait_time*1000.0)+atoi(lr_eval_string("{HowLong}")));
	lr_end_transaction("T01_HomePage", LR_AUTO);

	lr_start_transaction("T02_Shop");
	sleep( (int)(wait_time*3*1000.0)+2*atoi(lr_eval_string("{HowLong}")));
	lr_end_transaction("T02_Shop", LR_AUTO);

	lr_start_transaction("T03_Purchase");
	// warning
	// on a windows machine, sleep takes an integer value, but it is in milliseconds
	// on a Linux machine, it still takes an integer value, but it is in seconds!
	
	// this is to slow down over time. Calibrated for a 10 minute scenario
	// shows quadratic slow down over time	
	scenarioCurrentTime = time(NULL);
	runningTime = scenarioCurrentTime - scenarioStartTime;
	slowOverTime = runningTime * runningTime; // final value after 10 minutes
//	lr_message("%f",slowOverTime); // should be about 40 second addtional slow down, if run for 10 minutes
	slowOverTime = slowOverTime/10.0; // this is a part of the scaling
//	lr_message("%f",slowOverTime); 

//	lr_message("zz:%d:",(int)( (0.0 + wait_time)*500.0 ) );
//	lr_message("aa:%d:",(int)( slowOverTime + (wait_time*500.0) ) );

	sleep( (int)( slowOverTime + (wait_time*500.0)+(int)(1.5*atof(lr_eval_string("{HowLong}")))));
	// fail rate was one in 10, now 1 in 4
	if (atoi(lr_eval_string("{FailRate}")) == 1) {
	//if(1==1){ // this is for debugging. You can make it fail every thime
		web_reg_find("text=Speakers",LAST); // designed to always fail - causing a screen capture
		web_url("some site", 
			"URL=http://www.http://nimbusserver.aos.com:8000/#/",
		    // Public AOS "URL=http://www.advantageonlineshopping.com", // you might change this url to your partners home page? or Microfocus? or even AOS
			"Resource=0", 
			"RecContentType=text/html", 
			"Referer=", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			LAST);
	   	
    }
    else {
		lr_end_transaction("T03_Purchase", LR_AUTO);
    }
	if(atoi(lr_eval_string("{ScriptAbort}") ) ==1 ) {
//rrs		lr_abort();
	}
	return 0;
}



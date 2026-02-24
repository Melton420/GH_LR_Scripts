#include <time.h>
time_t scenarioStartTime;

vuser_init()
{

	double wait_time;
	
	wait_time = lr_get_attrib_double("TranTime"); // assumed in seconds
	lr_message("The addtional attribute ""TranTime"" was set to %f", wait_time);
   
	scenarioStartTime = time(NULL);
 	return(0);
}


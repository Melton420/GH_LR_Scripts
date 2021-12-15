package GatlingOneTransactionWith5

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class OneTransaction extends Simulation {

	val httpProtocol = http
		.baseURL("http://52.39.153.71")
        .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8")
        .userAgentHeader("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36")


	val scn = scenario("One Transaction With 5 sec ThinkTime")
		.exec(http("request_0")
			.get("/"))
	    .pause(5)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}
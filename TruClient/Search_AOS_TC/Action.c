//   *****************************************************************************************************************************************
//   ****   PLEASE NOTE: This is a READ-ONLY representation of the actual script. For editing please press the "Develop Script" button.   ****
//   *****************************************************************************************************************************************

Action()
{
	truclient_step("1", "Navigate to URL", "snapshot=Action_1.inf");
	truclient_step("2", "Click on element (1)", "snapshot=Action_2.inf");
	truclient_step("4", "Type laptop in Search AdvantageOnlineSho... textbox", "snapshot=Action_4.inf");
	truclient_step("5", "Press key Enter on Search AdvantageOnlineSho... textbox", "snapshot=Action_5.inf");
	truclient_step("7", "Select laptop CATEGORIES TOP RE...H LAPTOP $319.99 from Search AdvantageOnlineSho... listbox", "snapshot=Action_7.inf");
	truclient_step("8", "Click on HOME link", "snapshot=Action_8.inf");

	return 0;
}

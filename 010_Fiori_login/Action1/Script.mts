while Browser("CreationTime:=0").Exist(0)							'Loop to close all open browsers
	Browser("CreationTime:=0").Close 
Wend
SystemUtil.Run  "chrome.exe","","","",3						'launch the browser specified in the data table
Set AppContext=Browser("CreationTime:=0")						'Set the variable for what application (in this case the browser) we are acting upon
wait 5
URL = "https://sap-hana.mfdemoportal.com:44300/sap/bc/ui2/flp?sap-client=100&sap-language=EN#Shell-home"
AppContext.ClearCache												'Clear the browser cache to ensure you're getting the latest forms from the application
AppContext.Navigate URL											'Navigate to the application URL
AppContext.Maximize												'Maximize the application to give the best chance that the fields will be visible on the screen
AppContext.Sync													'Wait for the browser to stop spinning
AIUtil.SetContext AppContext										'Tell the AI engine to point at the application

Dim User_name
Dim Password
Dim Client

User_name=Parameter("User_Name")
Password=Parameter("Password")
Client=Parameter("Client")

if AIUtil.FindTextBlock("More information").Exist then ' occurs sometimes because of unsigned certificate
	AIUtil.FindTextBlock("More information").Click
	AIUtil.FindTextBlock("Go on to the webpage (not recommended)").Click
	wait 5 ' if the certificate warning appears, a hard wait after dismissing it seems to be necessary
End If

'AIUtil("text_box", "User").Type "s4h_sd_dem"
'AIUtil("text_box", "Password").Type "Welcome1"
'AIUtil("text_box", "100").Type "100"

AIUtil("text_box", "User").Type User_name
AIUtil("text_box", "Password").Type Password
AIUtil("text_box", "100").Type Client

AIUtil.FindTextBlock("Log On").Click

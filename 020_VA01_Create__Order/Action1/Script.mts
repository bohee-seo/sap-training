AIUtil.SetContext Browser("creationtime:=0")

Order_type=Parameter("Order_type")
Division=Parameter("Division")
Distribution_channel=Parameter("Distribution_channel")
Sales_org=Parameter("Sales_org")
Cust_ref_Date=Parameter("Cust_ref_Date")
Req_deliv_Date=Parameter("Req_deliv_Date")
Cust_Reference=Parameter("Cust_Reference")
Ship_to_Party=Parameter("Ship_to_Party")
Ship_to_Party=Parameter("Sold_to_Party")



For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil("search").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
		Exit for
	end if
Next

AIUtil("search").Search "va01" ' note - this does not seem to work with IE, but does indeed work fine with Chrome
If AIUtil.FindTextBlock("Apps").Exist (120) then ' you have to sync on the Apps text in the left pane - not on the actual Create Sales Order
		'using .exist insteach of checkExists so that I can specify a wait larger than the global timeout value
End If
AIUtil.FindTextBlock("Create Sales Orders").Click

AIUtil.FindTextBlock("Create Sales Documents").CheckExists True ' wait for the nex page to come up
' BTW - note that this is "Create Sales Documents", but the .click above is on "Create Sales Orders"
'
'AIUtil("text_box", "Order Type:").CheckExists True ' and, even though our eyes can see the Order Type, without this sync, the setting of the value fails
'AIUtil("text_box", "Order Type:").Type "or"
'AIUtil("text_box", "Division:").Type "00"	' to replay correctly, seem to need to input data from bottom to top
'AIUtil("text_box", "Distribution Channe:").Type "10"
'AIUtil("text_box", "Sales Organization:").Type "1710"
'AIUtil("button", "Continue").Click
'
'AIUtil("text_box", "Cust. Reference:").CheckExists True ' wait for the nex page to appear
'AIUtil("text_box", "Cust. Ref. Date:").Type "04/06/2022" ' seems to need to be a few days or maybe a month in the past
'AIUtil("text_box", "Cust. Reference:").Type "450000019998"
'AIUtil("text_box", "Ship-To Party:").Type "ewm17-cu02"
'AIUtil("text_box", "Sold-To Party:").Type "ewm17-cu02"


AIUtil("text_box", "Order Type:").CheckExists True ' and, even though our eyes can see the Order Type, without this sync, the setting of the value fails
AIUtil("text_box", "Order Type:").Type Order_type
AIUtil("text_box", "Division:").Type Division	' to replay correctly, seem to need to input data from bottom to top
AIUtil("text_box", "Distribution Channe:").Type Distribution_channel
AIUtil("text_box", "Sales Organization:").Type Sales_org
AIUtil("button", "Continue").Click

AIUtil("text_box", "Cust. Reference:").CheckExists True ' wait for the nex page to appear
AIUtil("text_box", "Cust. Ref. Date:").Type Cust_ref_Date ' seems to need to be a few days or maybe a month in the past
AIUtil("text_box", "Cust. Reference:").Type Cust_Reference
AIUtil("text_box", "Ship-To Party:").Type Ship_to_Party
AIUtil("text_box", "Sold-To Party:").Type Sold_to_Party


AIUtil("button", "Save").Click
AIUtil("check_box", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save")).CheckExists True
StatusBarText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("check_box", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save"))).GetText
StatusBarArray = Split(StatusBarText," ")
print  "The Order number is " & StatusBarArray(2)
Parameter("Order_number")=StatusBarArray(2)
AIUtil.FindTextBlock("Exit").click
AIUtil("left_triangle").Click


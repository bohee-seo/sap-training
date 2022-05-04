AIUtil.SetContext Browser("creationtime:=0")

Order_number=Parameter("Order_number")
Sales_org=Parameter("Sales_org")


AIUtil("search", micAnyText, micFromTop, 2).Click
'AIUtil("text_box", "").Type "1710"
AIUtil.FindTextBlock("Find").Click


AIUtil.SetContext Browser("creationtime:=0")

Order_Num=DataTable.Value("Order_Num","Global")
Sold_to_Party=DataTable.Value("Sold_to_Party","Global")
Ship_to_Party=DataTable.Value("Ship_to_Party","Global")
Cust_ref_Date=DataTable.Value("Cust_ref_Date","Global")
Req_deliv_Date=DataTable.Value("Req_deliv_Date","Global")
Pyt_Terms=DataTable.Value("Pyt_Terms","Global")

AIUtil("text_box", "Standard Order: "&Order_Num).CheckExists True
AIUtil("text_box", "Sold-To Party: "&Sold_to_Party).CheckExists True
AIUtil("text_box", "Ship-To Party: "&Ship_to_Party).CheckExists True
AIUtil("text_box", "Cust. Ref. Date: "&Cust_ref_Date).CheckExists True
AIUtil("text_box", Req_deliv_Date ).CheckExists True
AIUtil("text_box", "Pyt Terms: "&Pyt_Terms).CheckExists True

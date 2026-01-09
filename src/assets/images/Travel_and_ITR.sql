
Delete from RequestApproverDetail where UserID = 0 and ApprovalTypeID  = 32

Update EmployeeMaster Set IsActive = 0 where EmployeeID = 1871


Update  AttachmentDetails 
set IsActive = 0
where DetailID in (474453
,474454
,474455
,474456
,474457
,474458
,474459)




exec [SharpSP_InsertManagerBoardPendingRequestDetails] 'ITR-001644',32      
exec [SharpSP_InsertManagerBoardFutureRequestDetails] 'ITR-001644',32      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001644',32,0      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001644',32,1 


exec [SharpSP_InsertManagerBoardPendingRequestDetails] 'ITR-001654',32      
exec [SharpSP_InsertManagerBoardFutureRequestDetails] 'ITR-001654',32      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001654',32,0      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001654',32,1 

exec [SharpSP_InsertManagerBoardPendingRequestDetails] 'ITR-001655',32      
exec [SharpSP_InsertManagerBoardFutureRequestDetails] 'ITR-001655',32      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001655',32,0      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001655',32,1 


exec [SharpSP_InsertManagerBoardPendingRequestDetails] 'ITR-001756',32      
exec [SharpSP_InsertManagerBoardFutureRequestDetails] 'ITR-001756',32      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001756',32,0      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001756',32,1 

exec [SharpSP_InsertManagerBoardPendingRequestDetails] 'ITR-001848',32      
exec [SharpSP_InsertManagerBoardFutureRequestDetails] 'ITR-001848',32      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001848',32,0      
exec [SharpSP_InsertAccountsBoardPendingRequestDetails] 'ITR-001848',32,1 
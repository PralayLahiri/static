function validate()
{ 
    //  Year Validation Done
  if( document.Pdf_File.year.value == "-1" )
  {
    alert( "Please select year" );
    document.Pdf_File.City.focus() ;
    return false;
  }

   if( document.Pdf_File.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
    //  document.Pdf_File.textnames.focus() ;
     return false;
   }
   if( document.Pdf_File.fathername.value == "" )
   {
     alert( "Please provide your Father Name!" );
     document.Pdf_File.fathername.focus() ;
     return false;
   }
   
   if( document.Pdf_File.paddress.value == "" )
   {
     alert( "Please provide your Postal Address!" );
     document.Pdf_File.paddress.focus() ;
     return false;
   }
   if( document.Pdf_File.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.Pdf_File.personaladdress.focus() ;
     return false;
   }
   if ( ( Pdf_File.sex[0].checked == false ) && ( Pdf_File.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   



   if( document.Pdf_File.year.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.Pdf_File.City.focus() ;
     return false;
   }   
   if( document.Pdf_File.Course.value == "-1" )
   {
     alert( "Please provide your Course!" );
    
     return false;
   }   
   if( document.Pdf_File.District.value == "-1" )
   {
     alert( "Please provide your Select District!" );
    
     return false;
   }   
   if( document.Pdf_File.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }





   return( true );
}
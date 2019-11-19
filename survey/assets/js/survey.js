function CustomerFeedback() {
    if ($("#Survey").valid()) {
 
        /* URL of the restapi.php script followed by the table (patient) that we want to insert */   
        /* You will need to customize the root of the URL to your Cloud 9 */
        var myURL= "https://anabella-bellaval95.c9users.io/survey/restapi.php/survey";
        
        /* POST method means insert a new record */
        var myMethod = "POST";
 
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the column names in the table  */

        var myData = {};
        myData.DateVisited = document.getElementById("DateVisited").value;
        if (document.getElementById("DineIn").checked) {
            myData.DineInTakeOut = document.getElementById("DineIn").value;
        }
        if (document.getElementById("TakeOut").checked) {
            myData.DineInTakeOut = document.getElementById("TakeOut").value;
        }

        if(document.getElementById("FoodQualityExcellent").checked) {
            myData.FoodQuality  = document.getElementById("FoodQualityExcellent").value;
        }
        if(document.getElementById("FoodQualityGood").checked) {
            myData.FoodQuality  = document.getElementById("FoodQualityGood").value;
        }
        if(document.getElementById("FoodQualityAverage").checked) {
            myData.FoodQuality  = document.getElementById("FoodQualityAverage").value;
        }
        if(document.getElementById("FoodQualityDissatisfied").checked) {
            myData.FoodQuality  = document.getElementById("FoodQualityDissatisfied").value;
        }
        if(document.getElementById("OverallServiceExcellent").checked) {
            myData.OverallService  = document.getElementById("OverallServiceExcellent").value;
        }
        if(document.getElementById("OverallServiceGood").checked) {
            myData.OverallService  = document.getElementById("OverallServiceGood").value;
        }
        if(document.getElementById("OverallServiceAverage").checked) {
            myData.OverallService  = document.getElementById("OverallServiceAverage").value;
        }
        if(document.getElementById("OverallServiceDissatisfied").checked) {
            myData.OverallService  = document.getElementById("OverallServiceDissatisfied").value;
        }
        if(document.getElementById("CleanlinessExcellent").checked) {
            myData.Cleanliness  = document.getElementById("CleanlinessExcellent").value;
        }
        if(document.getElementById("CleanlinessGood").checked) {
            myData.Cleanliness  = document.getElementById("CleanlinessGood").value;
        }
        if(document.getElementById("CleanlinessAverage").checked) {
            myData.Cleanliness  = document.getElementById("CleanlinessAverage").value;
        }
        if(document.getElementById("CleanlinessDissatisfied").checked) {
            myData.Cleanliness  = document.getElementById("CleanlinessDissatisfied").value;
        }
        if(document.getElementById("OrderAccuracyExcellent").checked) {
            myData.OrderAccuracy  = document.getElementById("OrderAccuracyExcellent").value;
        }
        if(document.getElementById("OrderAccuracyGood").checked) {
            myData.OrderAccuracy  = document.getElementById("OrderAccuracyGood").value;
        }
        if(document.getElementById("OrderAccuracyAverage").checked) {
            myData.OrderAccuracy  = document.getElementById("OrderAccuracyAverage").value;
        }
        if(document.getElementById("OrderAccuracyDissatisfied").checked) {
            myData.OrderAccuracy  = document.getElementById("OrderAccuracyDissatisfied").value;
        }
        if(document.getElementById("SpeedofServiceExcellent").checked) {
            myData.SpeedofService  = document.getElementById("SpeedofServiceExcellent").value;
        }
        if(document.getElementById("SpeedofServiceGood").checked) {
            myData.SpeedofService  = document.getElementById("SpeedofServiceGood").value;
        }
        if(document.getElementById("SpeedofServiceAverage").checked) {
            myData.SpeedofService  = document.getElementById("SpeedofServiceAverage").value;
        }
        if(document.getElementById("SpeedofServiceDissatisfied").checked) {
            myData.SpeedofService  = document.getElementById("SpeedofServiceDissatisfied").value;
        }
        if(document.getElementById("ValueExcellent").checked) {
            myData.Value  = document.getElementById("ValueExcellent").value;
        }
        if(document.getElementById("OrderAccuracyGood").checked) {
            myData.Value  = document.getElementById("ValueGood").value;
        }
        if(document.getElementById("ValueAverage").checked) {
            myData.Value  = document.getElementById("ValueAverage").value;
        }
        if(document.getElementById("ValueDissatisfied").checked) {
            myData.Value  = document.getElementById("ValueDissatisfied").value;
        }
         if(document.getElementById("OverallExperienceExcellent").checked) {
            myData.OverallExperience  = document.getElementById("OverallExperienceExcellent").value;
        }
        if(document.getElementById("OverallExperienceGood").checked) {
            myData.OverallExperience  = document.getElementById("OverallExperienceGood").value;
        }
        if(document.getElementById("OverallExperienceAverage").checked) {
            myData.OverallExperience  = document.getElementById("OverallExperienceAverage").value;
        }
        if(document.getElementById("OverallExperienceDissatisfied").checked) {
            myData.OverallExperience  = document.getElementById("OverallExperienceDissatisfied").value;
        }


        myData.Comments = document.getElementById("Comments").value;
        myData.Name  = document.getElementById("Name").value;
        myData.Age  = document.getElementById("Age").value;
        myData.Email  = document.getElementById("Email").value;
        
        /* Perform AJAX call to process data 
        You have to supply the method, data, and url
        Also set the asynchronous flag to false, it seems to run better with the database */
        
        $.ajax({
          method: myMethod,
          data: myData,
          url: myURL,
          asynch: false
        })
        
        /* AJAX complete - display the result in msg */
        
        .done(function( msg ) {
            alert(msg);
        });
    }
}
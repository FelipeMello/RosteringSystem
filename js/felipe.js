console.log("Connected to felipe.js");
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var month ={
		'January':[], //31 days
		'February':[], //28 days
		'March':[], //31 days
		'April':[],
		'May':[],
		'June':[],
		'July':[],
		'August':[],
		'September':[],
		'October':[],
		'November':[],
		'December':[]
	}
	/** Each week has 7 days**/
	var weeks ={
		'week1':[],
		'week2':[],
		'week3':[],
		'week4':[],
		'week5':[],
	}
	/**
	var daysOftheWeek ={
		 'Sunday':[],
		 'Monday':[],
		 'Tuesday':[],
		 'Wednesday':[],
		 'Thursday':[],
		 'Friday':[],
		 'Saturday':[]
		
	}**/
	var daysOftheWeek =[];
	// daysOftheWeek.Monday.push(monday)''

	//sunday.Open.push("Open")
	var sunday = {
		'Open': [],
		'Close': [],
 	}

	var monday = {
		'Open': [],
		'Close': []
	}
	var tuesday = {
		'Open': [],
		'Close': []
	}
	var wednesday = {
		'Open': [],
		'Close': []
	}
	var thursday = {
		'Open': [],
		'Close': []
	}
	var friday = {
		'Open': [],
		'Close': []
	}
	var saturday = {
		'Open': [],
		'Close': []
	}



 	/** get the open/close time of each day of the daysOftheWeek
 	*	and store it in it's variable then store the var in the daysOftheWeek array
 	**/
 	function replace(x,y,z){
 		x = x.replace("y","z");
 		return x
 	}
 	function saveOpenClose(){
 		/**Sunday**/
 		var sundayOpen, sundayClose;
 		window.sunday.Open = document.getElementById("sundayOpen").value;
 		//sundayOpen = document.getElementById("sundayOpen").value;
 		// sundayOpen = sundayOpen.replace(":","");
 		window.sunday.Close = document.getElementById("sundayClose").value;
 		//sundayClose = document.getElementById("sundayClose").value;
 		// sundayClose = sundayClose.replace(":","");
 		// window.sunday.Open = sundayOpen;
 		// window.sunday.Close = sundayClose;

 		//daysOftheWeek.Sunday.push(sunday);
 		daysOftheWeek.push(sunday);
 		
 		/**Monday**/
 		window.monday.Open = document.getElementById("mondayOpen").value;
 		window.monday.Close = document.getElementById("mondayClose").value;
 		// daysOftheWeek.Monday.push(monday);
 		daysOftheWeek.push(monday);
 		
 		/**Tuesday**/
 		window.tuesday.Open = document.getElementById("tuesdayOpen").value;
 		window.tuesday.Close = document.getElementById("tuesdayClose").value;
 		// daysOftheWeek.Tuesday.push(tuesday);
 		daysOftheWeek.push(tuesday);
 		
 		/**Wednesday**/
 		window.wednesday.Open = document.getElementById("wednesdayOpen").value;
 		window.wednesday.Close = document.getElementById("wednesdayClose").value;
 		daysOftheWeek.push(wednesday);

 		/**Thursday**/
 		window.thursday.Open = document.getElementById("thursdayOpen").value;
 		window.thursday.Close = document.getElementById("thursdayClose").value;
 		//daysOftheWeek.Thursday.push(thursday);
 		daysOftheWeek.push(thursday);
 		
 		/**Friday**/
 		window.friday.Open = document.getElementById("fridayOpen").value;
 		window.friday.Close = document.getElementById("fridayClose").value;
 		//daysOftheWeek.Friday.push(friday);
 		daysOftheWeek.push(sunday);
 		
 		/**Saturday**/
 		window.saturday.Open = document.getElementById("saturdayOpen").value;
 		window.saturday.Close = document.getElementById("saturdayClose").value;
 		//daysOftheWeek.Saturday.push(saturday);
 		daysOftheWeek.push(sunday);
 		console.log("Open and closing time is save into the daysOfweekArray")

 		generateStaffHours();
 		
 	}
 	//if I pass the array monday it will return what time it will open at
 	//return the openTime
 	/**function getOpenTime(x){
 		return x.Open;
 	}
 	function getCloseTime(x){
 		return x.Close;
 	}**/

 	function timeStringToFloat(time) {
 		var hoursMinutes = time.split(/[.:]/);
  		var hours = parseInt(hoursMinutes[0], 10);
	  	var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
	 	return hours + minutes / 60;
	}

	function converTheObjectDaysOfTheWeekToDecimal(x){
		for(var i=0; i < daysOftheWeek.length; i++){
			var open = timeStringToFloat(daysOftheWeek[i].Open);
			var close = timeStringToFloat(daysOftheWeek[i].Close);
			window.sundayInt.Open.push(open)

			console.log("Open time : "+daysOftheWeek[i].Open+" Close time :" +daysOftheWeek[i].Close);
			console.log("Open time : "+open+" Close time :" +close);
		}
	}

	

 	function generateStaffHours(daysOftheWeek){
 		//this is a row
 		var columns, row, colInRow;
 		var start = document.getElementById("staffHours"); 

 		for(var i=0; i< days.length;i++){
 			columns = document.createElement("div");
	 		columns.className = "col";

 			columns.innerHTML += "<p>"+days[i]+"</p>";
 			start.appendChild(columns);
 			/**This did not work
				document.innerHTML ="<?php echo generateTime($open = '07:00', $close ='22:00'); ?>"
 				<?php  ?>
 			
 			**/
 			//j = opening time      j < close time
 			// var x = getOpenTime();
 			 for(var j=0; j<24; j++){
 			 	row = document.createElement("div");
		 	 	row.className = "row";

		 	 	colInRow = document.createElement("div");
		 	 	colInRow.className = "col";

		 	 	var next = j+1;

		 	 	if(j<10){
		 	 		colInRow.innerHTML = "0"+j+":00 to 0"+next+":00";
		 	 	}
		 	
		 	 	else{
		 	 		colInRow.innerHTML = j+":00 to "+next+":00";
		 	 	}
 				
 			 	row.appendChild(colInRow);
 			  	columns.appendChild(row);
 			 }

 		}
 		//create 7 coluns in this for each day of the week



 	}
// 	// example monday.open.push(value);
// ng the classes from framework 7 into it
//     card = document.createElement("div");
//     card.className = "card";

//     cardContent = document.createElement("div");
//     cardContent.className = "card-content";

//     cardContentInner = document.createElement("div");
//     cardContentInner.className = "card-content-inner";
//     cardContentInner.innerHTML = arrayOfData[i];
    

//     //so the var start is the root node                   start           = Grandad
//     start.appendChild(card);                        //    card            = Parent
//     //the the card is the child of the Root               cardContent     = Child
//     card.appendChild(cardContent);                  //    cardContentInner= Great Gran Child...
//     //the card content is the child of the card
//     cardContent.appendChild(cardContentInner);
//     //the card 




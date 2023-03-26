$(function() {
  	$("#simple-treeview")
   	 .dxTreeView({
    	  items: products,
     	 width: 300,
      	onItemClick: function(e) {
       	 var item = e.itemData;
       	 if (item.price) {
          	$("#product-details").removeClass("hidden");
       	$("#product-details > .price").text( item.price);
          $('#map1').html(item.gf);
          $(document).ready(function(){
 	$.ajax({
  	url:item.price,
dataType:"text",
   	success:function(data)
  	 {
         	var employee_data = data.split(/\r?\n|\r/);
   	 var table_data = '<table class="table table-bordered table-striped">';
    	for(var count = 0; count<employee_data.length; count++)
   	 {
    	 var cell_data = employee_data[count].split(",");
    	 table_data += '<tr>';
  	  for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     	{
     	 if(count === 0)
     	 {
       	table_data += '<th>'+cell_data[cell_count]+'</th>';
   	   }
      	else
    	  {
   	    table_data += '<td>'+cell_data[cell_count]+'</td>';
      	}
   	  }
  	   table_data += '</tr>';
 	   }
   	 table_data += '</table>';
    	$('#att_table').html(table_data);
  	 }
  	});
 });
          $("#product-details > .name").text(item.text);
       	 } else {
          $("#product-details").addClass("hidden");
      	  }
    	  }
  	  })
 .dxTreeView("instance");
});

var products = [
  	{
  	  id: "1",
 	   text: "Data",
 	   expanded: true,
  	  items: [
  	    {
     	   id: "1_1",
      	  text: "Centeral Govt",
       	 expanded: true,
        	items: [
          {
            id: "1_1_1",
            text: "Adult Education",
            items: [
              {
                id: "1_1_1_1",
                text: "Class wise Gender Parity Index",
price:"https://api.data.gov.in/resource/fe2108e2-e06f-4fe9-8562-a1ebf496517b?api-key=579b464db66ec23bdd0000019885f44726cc491e7b89d21d41f9925e&format=csv&offset=0&limit=100",
gf:'<iframe width="600" height="600" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col0%3E%3E1+from+1An717FK7PGxdkAiR1r4emNK46ybBIjaD0cjmnCH8&amp;viz=MAP&amp;h=false&amp;lat=22.760930529663938&amp;lng=82.80070500020008&amp;t=1&amp;z=4&amp;l=col0%3E%3E1&amp;y=2&amp;tmplt=2&amp;hml=KML"></iframe>'
              },
              {
                id: "1_1_1_2",
text: "Enrolment in open school education of all categories of student for 2009-10",
price: 'https://api.data.gov.in/resource/4962b304-5d96-4906-a850-afa3a5fe698f?api-key=579b464db66ec23bdd0000019885f44726cc491e7b89d21d41f9925e &format=csv&offset=0&limit=100',
gf:' <iframe width="600" height="600" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col0%3E%3E0+from+1wW0v2WQQif1QTicqB2xSNcyYSfj7vV0yMh8ON66-&amp;viz=MAP&amp;h=false&amp;lat=22.759087010832204&amp;lng=82.75872203409631&amp;t=1&amp;z=4&amp;l=col0%3E%3E0&amp;y=2&amp;tmplt=2&amp;hml=KML"></iframe>'
              }
            ]
          },
          {
            id: "1_1_2",
            text: "Multisectoral",
            expanded: true,
            items: [
              {
                id: "1_1_2_1",
                text: "State/UT-wise of water harvesting works expenditure ",
 price: "https://api.data.gov.in/resource/19239a26-d414-4d52-af87-42849eea21eb?api-key=579b464db66ec23bdd0000019885f44726cc491e7b89d21d41f9925e&format=csv&offset=0&limit=10",
gf:'<iframe width="600" height="600" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col0%3E%3E0+from+1jDLldhI1H73l6NMf-T689H-JoCv6gfuFeUEw5iuB&amp;viz=MAP&amp;h=false&amp;lat=22.760930529663938&amp;lng=82.80070500020008&amp;t=1&amp;z=4&amp;l=col0%3E%3E0&amp;y=3&amp;tmplt=3&amp;hml=KML"></iframe>'
              },
              {
                id: "1_1_2_2",
                text: "State/UT-wise details of BharatNet as on 28.01.18",
                image:
                  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/5.png",
price: "https://api.data.gov.in/resource/d6240ff1-9104-43a1-937f-cb4360728c16?api-key=579b464db66ec23bdd0000019885f44726cc491e7b89d21d41f9925e&format=csv&offset=0&limit=100"
              },
            ]
          },
          {
            id: "1_1_3",
            text: "Animal Husbandary",
            expanded: true,
            items: [
              {
                id: "1_1_3_1",
                text: 'State/UT-wise Fish Seed Production ',
   price:"https://api.data.gov.in/resource/3e086045-7b42-4237-a659-772ebf1cf482?api-key=579b464db66ec23bdd0000019885f44726cc491e7b89d21d41f9925e&format=csv&offset=0&limit=100"
              },
              {
                id: "1_1_3_2",
                text: 'Statewise Milk production',
gf:'<iframe width="600" height="600" scrolling="no"    frameborder="no" src="http://192.168.14.111/map.html"></iframe>',
price :"https://api.data.gov.in/resource/855b0a9f-6a0b-48f6-8abf-fad8a8f8be65?api-key=579b464db66ec23bdd0000019885f44726cc491e7b89d21d41f9925e&format=csv&offset=0&limit=100"
              }
            ]
          }
      	  ]
   	   }
    	]
  	}
];

 function initialize() {
    	var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
 (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
   	 if (isMobile) {
    	  var viewport = document.querySelector("meta[name=viewport]");
 	  viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
   	 }
    	var mapDiv = document.getElementById('googft-mapCanvas');
    	mapDiv.style.width = isMobile ? '500%' : '900px';
  	  mapDiv.style.height = isMobile ? '100%' : '900px';
    	var map = new google.maps.Map(mapDiv, {
     	 center: new google.maps.LatLng(23.475453321831917, 78.30693651653951),
    	  zoom: 5,
      	mapTypeId: google.maps.MapTypeId['ROADMAP']
   	 });
    map.controls[google.maps.ControlPosition['LEFT_BOTTOM']].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition['LEFT_BOTTOM']].push(document.getElementById('googft-legend'));

    	layer = new google.maps.FusionTablesLayer({
    	  map: map,
     	 heatmap: { enabled: false },
     	 query: {
        	select: "col0",
        	from: "1VpeBT7N0oK4m7MRlVQi3xO8PTmDyo63q_y7syvty",
       	 where: ""
      	},
      	options: {
        	styleId: 3,
        	templateId: 4
      	}
    	});

    	if (isMobile) {
      	var legend = document.getElementById('googft-legend');
     	 var legendOpenButton = document.getElementById('googft-legend-open');
      	var legendCloseButton = document.getElementById('googft-legend-close');
      	legend.style.display = 'none';
      	legendOpenButton.style.display = 'block';
      	legendCloseButton.style.display = 'block';
     	 legendOpenButton.onclick = function() {
       	 legend.style.display = 'block';
        legendOpenButton.style.display = 'none';
      }
      legendCloseButton.onclick = function() {
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
      }
     }
    }
  google.maps.event.addDomListener(window, 'load', initialize);


function blog(x)
  {
    console.log(x);
    localStorage.setItem("id",x);
  }
  var xhttp=new XMLHttpRequest();
  xhttp.open("GET","http://koushikmln.com:7500/blogs",true);//true defines asynchronous requests
      //send headers
      xhttp.setRequestHeader("Content-type","application/json");
      xhttp.send();
      xhttp.onreadystatechange = function()
      {
        if(this.readyState == 4 && this.status == 200)//200 is a success message(responce code)(2xx are success codes)
        {
          //document.getElementById("ajax").innerHTML=this.responseText;
          var x=JSON.parse(this.responseText);
          //console.log(x[0]);
          document.getElementById("card1header").innerHTML=x[0].title;
          document.getElementById("card1image").src=x[0].imageUrl;
          document.getElementById("card1text").innerHTML=x[0].content;
          document.getElementById("span1").innerHTML=x[0].id;
          console.log(x[0].id);
          document.getElementById("card2header").innerHTML=x[1].title;
          document.getElementById("card2image").src=x[1].imageUrl;
          document.getElementById("card2text").innerHTML=x[1].content;
          document.getElementById("span2").innerHTML=x[1].id;
          console.log(x[1].id);
          document.getElementById("card3header").innerHTML=x[2].title;
          document.getElementById("card3image").src=x[2].imageUrl;
          document.getElementById("card3text").innerHTML=x[2].content;
          document.getElementById("span3").innerHTML=x[2].id;
          console.log(x[2].id);
          document.getElementById("card4header").innerHTML=x[3].title;
          document.getElementById("card4image").src=x[3].imageUrl;
          document.getElementById("card4text").innerHTML=x[3].content;
          document.getElementById("span4").innerHTML=x[3].id;
          console.log(x[3].id);
        }
      }
      function myFuncSignUp()
    {
      var a=document.forms[1].emailAddress.value;
      var b=document.forms[1].pass.value;
      //console.log(a);
      //console.log(b);
      var arr=JSON.parse(localStorage.getItem("myJSON"));
      if(arr==null)
      {
        arr=[];
      }
      var user={"username":a,"password":b};
      for(i in arr)
      {
        if( arr[i].username==a)
        {
          alert("username already exists");
          return;
        }
      }
      console.log(user);
      arr.push(user);
      console.log(arr);
      localStorage.setItem("myJSON",JSON.stringify(arr));
      console.log(localStorage.getItem("myJSON"));
      alert("Succesfully Registered");
    }
    function myFunc()
    {
      flag=0;
      var a=document.forms[0].emailAddress.value;
      var b=document.forms[0].pass.value;
      var arr=JSON.parse(localStorage.getItem("myJSON"));
      for(i in arr)
      {
        if( arr[i].username==a && arr[i].password==b)
        {
          
          document.getElementById("loginname").innerHTML="<h4>Hello "+arr[i].username+"</h4>";
          document.getElementById("logoutbutton").style.display="block";
          document.getElementById("loginbutton").style.display="none";
          document.getElementById("signupbutton").style.display="none";
          flag=1;
          break;
        }
      }
      if(!flag)
      {
        alert("Submit Credentials Again");
      }
      else
      {
        alert("Login Succesful");
      }
    }
    function mylogout()
    {
      document.getElementById("loginname").innerHTML="";
          document.getElementById("logoutbutton").style.display="none";
          document.getElementById("loginbutton").style.display="block";
          document.getElementById("signupbutton").style.display="block";
          
    }
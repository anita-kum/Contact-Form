<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Contact Form</title>
	
    <link rel="stylesheet" href="style.css"/>
  </head>
  
<body>


<div class="container">
<div class="center">

<h2>Contact Form</h2>
 <form id="form">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your first name..">
      </div>
    </div>
	<div class="row">
      <div class="col-25">
        <label for="fname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
         <label for="email">Email:</label>
      </div>
      <div class="col-75">
        <input type="text" name="email" id="email" placeholder="email@example.com">
      </div>
    </div>
   
    <div class="row">
      <div class="col-25">
       <label for="message">Message:</label>
      </div>
      <div class="col-75">
        <textarea name="message" id="message" placeholder="Write something.." style="height:200px"></textarea>
      </div>
    </div>
	<div class="row">
      <div class="col-25">
       	<label>Your Image File</label>
  
      </div>
      <div class="col-75">
        <input type="file" name="myImage" id="myImage" accept="image/png, image/gif, image/jpeg"/>
      </div>
    </div>


    <div class="row">
      <button name="submit" id="submit">Send</button>
      <label id="loader"></label>
      <label id="info"></label>
    </div>
  </form>
  </div>
</div>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="main.js"></script>
</body>
</html>

const express = require('express')
const app = express()
const port = 5000;
app.use(express.json());

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crm"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
})

app.post("/test", (req,res)=>{
  console.log("Testing");
});

app.post("/loginvalidationapi", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let sql = "SELECT id, txtFirstName FROM tblusers where txtFirstName='" + username + "' and txtPassword='" + password + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    if (result == '') {
      res.send("username and password is incorrect");
    }
    else {
      res.send("Success")
    }
  });
});


app.post("/signupapi", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;
  let repassword = req.body.repassword;

  let sql =
    "SELECT txtFirstName,txtEmail,txtPassword FROM tblusers where txtEmail='" + email + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);

    if ((email != "") & (firstname != "") ) {
      if ((password != repassword)) {
        if (result != "") {
          res.send("user already exist please signin" + JSON.stringify(result));
        }
        else {
          let sqlinsert = "insert into tblusers(txtFirstName,txtLastName,txtEmail,txtPassword) values('" + firstname + "','" + lastname + "','" + email + "','" + password + "') ;";
          con.query(sqlinsert, function (err, result1) {
            if (err) throw err;
            console.log("inserted" + result1);
            res.send("user added")
          });
        }
      } else {
        res.send("password and repassword must match");
      }
    };
  });

});

app.post("/verifyotpapi", (req, res) => {
  let otp = req.body.otp;
  let sql = "select txtOTP,dtOTPsent from tblusers where txtOTP='" + otp + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    if (result == "") {
      res.send("OTP not match");
      return res
    }
    else {
      res.send("Valid" + JSON.stringify(result));
    }
 });
});
app.post("/resendotpapi", (req, res) => {
  let otp = req.body.otp;
  let phonenumber = req.body.phonenumber
  let sql ="select txtPhonenumber,txtOTP from tblusers where txtPhonenumber='"+phonenumber+"'";
  if (phonenumber == ""){
    res.send("phonenumber is mandatory");
    return res
  }
  if (otp == ""){
    res.send("otp is mandatory");
    return res
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Resent: " + result);
  });
});
app.post("/insertsingleprofileapi", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let dob = req.body.dob;
  let address = req.body.address
  let password = req.body.password;
  let repassword=req.body.repassword;
  let sql = "select txtEmail from tblusers where txtEmail =  '" + email + "';"
  let sql1 = "insert into tblusers(txtFirstName,txtLastName,txtEmail,txtdob,txtaddress,txtPassword) values ('" + firstname + "','" + lastname + "','" + email + "','" + dob + "','" + address + "','" + password + "');"
  if (firstname == "") {
    res.send("Firstname is mandatory") 
    return
  }
 
  if (email == "") {
    res.send("Email is mandatory")
    return
  }
  if (dob == "") {
    res.send("dob is mandatory")
    return
  }
  if (address == "") {
    res.send("address is mandatory")
    return
  }
  if (password == "") {
    res.send("Password is mandatory")
    return
  }
   if (repassword == "") {
   res.send("Repassword is mandatory")
     return
   }
   if (password != repassword) {
     res.send("Password do not match")
     return
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result = " + JSON.stringify(result))
    if (result != "") {
      res.send("Profile already exists!")
      return
    }
    else {
      con.query(sql1, function (err, result) {
        if (err) throw err;
        res.send("Profile Inserted!")
        console.log("New  profile  inserted")
        return
      });
    }
  });
});
app.post("/getsingleprofileapi", (req, res) => {
  let firstname = req.body.firstname;
  let sql = "select txtFirstName,txtLastName,txtEmail,txtPhonenumber from tblusers where txtFirstName = '" + firstname + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("result")
    if (result != "") {
      res.send("result " + JSON.stringify(result))
    }
    else {
      res.send("Not Exist")
    }
  });
});
app.post("/updatesingleprofileapi", (req, res) => {
  let firstname = req.body.firstname;
  let email = req.body.email;
  let id = req.body.id;
  let sql = "select id,txtFirstName,txtEmail from tblusers where txtEmail= '"+email+"'";
  let sqlupdate = "update tblusers    set txtEmail='"+email+"'    where id='"+id+"'";
  if (firstname == "") {
    res.send("firstname is mandatory");
    return res
  }
  if (email == "") {
    res.send("email is mandatory");
    return res
  }
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result != "") {
      res.send("already exist");
    }
  });
  con.query(sqlupdate, function (err, result) {
    if (err) throw err;
    console.log("updated" + result);
    res.send("updated")
  });
});

app.post("/GetSingleCampaignapi", (req, res) => {
  let txtCampaignName = req.body.txtCampaignName;
  let sqlSinglecampaign =
    "SELECT txtCampaignName CampaignName,dtStartdate Startdate,dtEnddate Enddate , count(txtCampaignName) NoOfOwners FROM tblcampaign join tblusers where txtCampaignName = '"+txtCampaignName+"' group by txtCampaignName;";
  con.query(sqlSinglecampaign, function (err, result) {
    if (err) throw err;
    console.log("required Campaign info");
    if (result != "") {
      res.send("Campaign info of  selected Campaign" + JSON.stringify(result))
      return
    } else {
      res.send("Campaign  Not Exist")
      return
    }
  });
});
app.post("/addCampaignapi", (req, res) => {
  let Campaignname=req.body.Campaignname;
  let Producttype=req.body.Producttype;
  let Startdate=req.body.Startdate;
  let Enddate=req.body.Enddate;
  let Createdon=req.body.Createdon;
  let sql = "insert into tblcampaign(txtCampaignName,refProducttype,dtStartdate,dtEnddate,dtCreatedOn) values('"+Campaignname+"','"+Producttype+"','"+Startdate+"','"+Enddate+"','"+Createdon+"');";

  con.query(sql, function (err, result) {
     if (err) throw err;
      console.log("Result" + result);
      if(Campaignname==""){
        res.send("Campaignname is mandatory")
      }
      if(Producttype==""){
        res.send("producttype is mandatory")
      }
      if(Startdate==""){
        res.send('Startdate is mandatory')
      }
      if(Enddate==""){
        res.send('enddate is mandatory')
      }
      if(Createdon==""){
        res.send("createdon is mandatory")
      }
      else
      {
      res.send("Campaign Added Successfully")
      }

    })
  })

app.post("/getsinglelead", (req, res) => {
  let id = req.body.id;
  let sql = "select txtSuffix,txtFirstName,txtLastName,txtEmail from tblusers where id  = '" + id + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Profile  displayed")
  
    if (result != "") {
      res.send("Profile Information " + JSON.stringify(result))
      return
    }
    else {
      res.send("Profile does not exist")
      return
    }
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


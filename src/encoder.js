var encoder = {
        setMessage: function() {
          this.message = document.getElementById("message").value;
        },
        getPassword: function() {
          this.password = prompt("Enter the password");
        },
        setUrl: function() {
          this.url = window.location.host  + "/" + "decode.html?" + this.encrypt();
        },
        replaceMessageWithUrl: function () {
          document.getElementById("message").value = "Enter this URL and then your password: " + this.url;
        },
        encrypt: function() {
          cypher = CryptoJS.AES.encrypt(this.message, this.password)
          console.log("Verified: " +
            CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
          return cypher
        },
        protect: function() {
          this.setMessage()
          this.getPassword()
          this.setUrl()
          this.replaceMessageWithUrl()
        }
      }
      document.getElementById("encrypt").onclick = function(){
        encoder.protect();
      }

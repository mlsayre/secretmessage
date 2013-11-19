var decoder = {
        getMessage: function() {
          var urlsplit = window.location.href.split( '?' );
          this.cypher = urlsplit[1];

        },
        getPassword: function() {
          this.password = prompt("Enter the password");
        },
        urltoMessage: function() {
          this.secretmessage = this.decrypt();

        },
        replaceMessageWithUrl: function () {
          document.getElementById("message").value = this.secretmessage;
        },
        decrypt: function() {
          return CryptoJS.AES.decrypt(this.cypher, this.password).toString(CryptoJS.enc.Utf8);

        },
        unprotect: function() {
          this.getMessage()
          this.getPassword()
          this.urltoMessage()
          this.replaceMessageWithUrl()
        }
      }
      document.getElementById("decrypt").onclick = function(){
        decoder.unprotect();
      }

describe("Encoder", function() {
  it("turns a message and password into an encrypted URL", function() {

    encoder.setMessage    = function() { encoder.message = "floop"; };
    decoder.getPassword   = function() { decoder.password = "password"; };
    expect(encoder.encrypt()).toEqual("U2FsdGVkX1/Zsh8bgtQD/cMXhVffhzsfopup/bL5MMg=");
  });
});

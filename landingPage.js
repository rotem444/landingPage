$("input, textarea").blur(function () {
  $(`output[for='${this.name}']`).val(this.validationMessage);
});
let responseMesseg = $("#response");
$("form").submit(async function (e) {
  e.preventDefault();
  let data = { phone: "" };
  for (let { name, value } of $(this).serializeArray()) {
    ["prefix", "phone"].includes(name)
      ? (data.phone += value)
      : (data[name] = value);
  }
  try {
    await $.post("mailto:mail@example.org", { data });
    responseMesseg
      .attr("class", "text-success")
      .val("The message was received successfully");
  } catch (err) {
    responseMesseg.attr("class", "text-danger").val("access denied");
  }
});

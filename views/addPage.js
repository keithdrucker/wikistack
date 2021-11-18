const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form action="/wiki/" method="POST">

    <div><label for="author" class="col-sm-2 control-label">Author</label>
    <div class="col-sm-10">
    <input id="author" name="author" type="text" class="form-control"/>
    </div>

    <div><label for="authoremail" class="col-sm-2 control-label">Author Email</label>
    <div class="col-sm-10">
    <input id="authoremail" name="authoremail" type="text" class="form-control"/></div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div><label for="pagecontent" class="col-sm-2 control-label">Page Content</label>
    <div class="col-sm-10">
    <input id="pagecontent" name="pagecontent" type="text" class="form-control"/></div>

    <div><label for="pagestatus" class="col-sm-2 control-label">Page Status</label>
    <div class="col-sm-10">
    <input id="pagestatus" name="pagestatus" type="text" class="form-control"/></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);

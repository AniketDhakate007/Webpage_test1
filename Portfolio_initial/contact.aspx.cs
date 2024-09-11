using System;

public partial class Contact : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void SubmitForm(object sender, EventArgs e)
    {
        string name = Request.Form["name"];
        string email = Request.Form["email"];
        string message = Request.Form["message"];

        // Basic processing logic (e.g., saving to a database or sending an email)
        // For now, we are just simulating the process.
        Response.Write("Form submitted! We'll be in touch soon.");
    }
}

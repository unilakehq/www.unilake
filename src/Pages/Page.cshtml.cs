using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace www.unilake;

public class Page : PageModel
{
    [FromRoute]
    public string Slug { get; set; }
}
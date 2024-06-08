using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace www.unilake.Pages.Posts;

public class AuthorModel : PageModel
{
    [FromRoute]
    public string? Slug { get; set; }
}
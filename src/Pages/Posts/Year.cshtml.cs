using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace www.unilake.Pages.Posts;

public class YearModel : PageModel
{
    [FromRoute]
    public int Year { get; set; }
}
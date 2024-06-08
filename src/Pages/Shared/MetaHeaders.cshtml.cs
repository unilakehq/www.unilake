using Microsoft.AspNetCore.Mvc.RazorPages;

namespace www.unilake.Pages.Shared;
public class MetaHeaders : PageModel
{
    public MarkdownFileBase Doc { get; set; }
    public MetaHeaders(MarkdownFileBase doc) => Doc = doc;

    public string? CanonicalUrl { get; set; }
    public AuthorInfo? Author { get; set; }
    public string? Image { get; set; }
}

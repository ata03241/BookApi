using BookApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookApi.Controller
{
    [Route("Quotes")]
    [ApiController]
    
    public class QuotesController : ControllerBase
    {
        private static readonly List<Quote> quotes = new List<Quote>
        {
            new Quote { Id = 1, Text = "Great minds discuss ideas; average minds discuss events; small minds discuss people.", Author = "Eleanor Roosevelt" },
            new Quote { Id = 2, Text = "Build your own dreams, or someone else will hire you to build theirs.", Author = "Farrah Gray" },
            new Quote { Id = 3, Text = "The only way to do great work is to love what you do.", Author = "Steve Jobs" },
            new Quote { Id = 4, Text = "Success usually comes to those who are too busy to be looking for it.", Author = "Henry David Thoreau" },
            new Quote { Id = 5, Text = "Don't watch the clock; do what it does. Keep going.", Author = "Sam Levenson" },
            new Quote { Id = 6, Text = "You miss 100% of the shots you don't take.", Author = "Wayne Gretzky" },
        };

        [HttpGet]
        public IActionResult GetAllQuotes()
        {
            return Ok(quotes);
        }
    }
}

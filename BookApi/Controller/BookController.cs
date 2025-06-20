using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookApi.Models;
using BookApi.Data;
using Microsoft.EntityFrameworkCore;

namespace BookApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/book
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            return await _context.Books.ToListAsync(); //Fetch all books and return as list
        }

        //Get: Api/books/id
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id); //using Id to find book in db
            if (book == null)
            {
                return NotFound();
            }
            return book;
        }

        //Post: api/book
        [HttpPost]
        public async Task<ActionResult<Book>> CreateBook(Book book)
        {
            _context.Books.Add(book); //to add
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book); //return the created book
        }

        //Put: api/book/id
        [HttpPut("{id}")]

        public async Task<ActionResult> UpdateBook(int id, Book book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            var existingBook = await _context.Books.FindAsync(id);
            if (existingBook == null)
            {
                return NotFound();
            }
            existingBook.Title = book.Title;
            existingBook.Author = book.Author;
            existingBook.Genre = book.Genre;
            existingBook.PublishedDate = book.PublishedDate;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        //Delete: api/book/id
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book); 
            await _context.SaveChangesAsync();
            return NoContent(); 
        }
    }
    

}

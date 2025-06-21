using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BookApi.Models;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    [NotMapped]
    public string Password { get; set; } = string.Empty; 
    [JsonIgnore]
    public string PasswordHash { get; set; } = string.Empty;

}
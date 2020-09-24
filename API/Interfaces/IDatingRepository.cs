using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface IDatingRepository<T> where T: class
    {
        Task Add(T Entity);
        Task<bool> Delete(T Entity);
        Task<bool> SaveChanges();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}
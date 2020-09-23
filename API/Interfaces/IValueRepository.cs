using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface IValueRepository
    {
        Task<IEnumerable<Value>> GetValues();
        Task<Value> GetValue(int id);
    }
}
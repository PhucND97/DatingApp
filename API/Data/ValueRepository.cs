using System.Collections.Generic;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ValueRepository : IValueRepository
    {
        private readonly DataContext _context;

        public ValueRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Value> GetValue(int id)
        {
            return await _context.Values.FirstOrDefaultAsync(v => v.Id == id);
        }

        public async Task<IEnumerable<Value>> GetValues()
        {
            return await _context.Values.ToListAsync();
        }
    }
}
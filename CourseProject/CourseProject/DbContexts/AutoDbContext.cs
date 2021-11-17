using Microsoft.EntityFrameworkCore;

namespace CourseProject.DbContexts
{
    public class AutoDbContext : DbContext
    {
        public AutoDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}

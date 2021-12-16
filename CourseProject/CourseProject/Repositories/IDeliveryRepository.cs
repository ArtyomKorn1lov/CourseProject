using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public interface IDeliveryRepository
    {
        Task<List<Delivery>> GetAll();
        Task<Delivery> GetById(int id);
        Task Create(Delivery delivery);
        Task Update(Delivery delivery);
        Task Delete(int id);
    }
}

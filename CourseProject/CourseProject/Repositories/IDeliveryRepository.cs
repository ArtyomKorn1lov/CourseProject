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
        Task<Delivery> GetById(int detailId, int providerId);
        Task Create(Delivery delivery);
        Task Update(Delivery delivery);
        Task Delete(int detailId, int providerId);
    }
}

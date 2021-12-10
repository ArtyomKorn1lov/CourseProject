using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public interface IDeliveryService
    {
        Task<List<Delivery>> GetAll();
        Task<Delivery> GetById(int detailId, int providerId);
        Task<bool> Create(Delivery delivery);
        Task<bool> Update(Delivery delivery);
        Task<bool> Delete(int detailId, int providerId);
    }
}

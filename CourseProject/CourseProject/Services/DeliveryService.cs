using CourseProject.Entity;
using CourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class DeliveryService : IDeliveryService
    {
        private IDeliveryRepository _deliveryRepository;

        public DeliveryService(IDeliveryRepository deliveryRepository)
        {
            _deliveryRepository = deliveryRepository;
        }

        public async Task<bool> Create(Delivery delivery)
        {
            try 
            {
                if (delivery != null)
                    await _deliveryRepository.Create(delivery);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Delete(int detailId, int providerId)
        {
            try
            {
                await _deliveryRepository.Delete(detailId, providerId);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Delivery>> GetAll()
        {
            return await _deliveryRepository.GetAll();
        }

        public async Task<Delivery> GetById(int detailId, int providerId)
        {
            return await _deliveryRepository.GetById(detailId, providerId);
        }

        public async Task<bool> Update(Delivery delivery)
        {
            try
            {
                await _deliveryRepository.Update(delivery);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}

﻿using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Repositories
{
    public class DeliveryRepository : IDeliveryRepository
    {
        private AutoDbContext _autoDbContext;

        public DeliveryRepository(AutoDbContext autoDbContext)
        {
            _autoDbContext = autoDbContext;
        }

        public async Task Create(Delivery delivery)
        {
            await _autoDbContext.Set<Delivery>().AddAsync(delivery);
        }

        public async Task Delete(int detailId, int providerId)
        {
            Delivery delivery = await GetById(detailId, providerId);
            if (delivery != null)
                _autoDbContext.Set<Delivery>().Remove(delivery);
        }

        public async Task<List<Delivery>> GetAll()
        {
            return await _autoDbContext.Set<Delivery>().ToListAsync();
        }

        public async Task<Delivery> GetById(int detailId, int providerId)
        {
            return await _autoDbContext.Set<Delivery>().FirstOrDefaultAsync(d => d.DetailId == detailId && d.ProviderId == providerId);
        }

        public async Task Update(Delivery delivery)
        {
            Delivery _delivery = await GetById(delivery.DetailId, delivery.ProviderId);
            _delivery.CopyFrom(delivery);
        }
    }
}

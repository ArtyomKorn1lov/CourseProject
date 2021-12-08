using CourseProject.Entity;
using CourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class ProviderService : IProviderService
    {
        private IProviderRepository _providerRepository;

        public ProviderService(IProviderRepository providerRepository)
        {
            _providerRepository = providerRepository;
        }

        public async Task<bool> Create(Provider provider)
        {
            try
            {
                if(provider != null)
                {
                    await _providerRepository.Create(provider);
                }
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                await _providerRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Provider>> GetAll()
        {
            return await _providerRepository.GetAll();
        }

        public async Task<Provider> GetById(int id)
        {
            return await _providerRepository.GetById(id); 
        }

        public async Task<bool> Update(Provider provider)
        {
            try
            {
                await _providerRepository.Update(provider);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}

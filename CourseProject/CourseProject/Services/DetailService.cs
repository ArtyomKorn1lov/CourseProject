using CourseProject.Entity;
using CourseProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Services
{
    public class DetailService : IDetailService
    {
        private IDetailRepository _detailRepository;

        public DetailService(IDetailRepository detailRepository)
        {
            _detailRepository = detailRepository;
        }

        public bool Create(Detail detail)
        {
            try
            {
                if(detail != null)
                    _detailRepository.Create(detail);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                _detailRepository.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Detail> GetAll()
        {
            return _detailRepository.GetAll();
        }

        public Detail GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}

using CourseProject.Converters;
using CourseProject.Dto;
using CourseProject.Entity;
using CourseProject.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Controllers
{
    [ApiController]
    [Route("api/detail")]
    public class DetailController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IDetailRepository _detailRepository;

        public DetailController(IUnitOfWork unitOfWork, IDetailRepository detailRepository)
        {
            _unitOfWork = unitOfWork;
            _detailRepository = detailRepository;
        }

        [HttpGet("all")]
        public List<DetailDto> GetAll()
        {
            List<Detail> details = _detailRepository.GetAll();
            if(details == null)
            {
                return new List<DetailDto>();
            }
            return details.Select(d => DtoConverter.ConvertToDetailDto(d)).ToList();
        }
    }
}

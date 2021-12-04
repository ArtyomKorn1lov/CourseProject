using CourseProject.Converters;
using CourseProject.Dto;
using CourseProject.Entity;
using CourseProject.Repositories;
using CourseProject.Services;
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
        private IDetailService _detailService;

        public DetailController(IUnitOfWork unitOfWork, IDetailService detailService)
        {
            _unitOfWork = unitOfWork;
            _detailService = detailService;
        }

        [HttpGet("all")]
        public List<DetailDto> GetAll()
        {
            List<Detail> details = _detailService.GetAll();
            if(details == null)
            {
                return new List<DetailDto>();
            }
            return details.Select(d => DtoConverter.ConvertToDetailDto(d)).ToList();
        }

        [HttpPost]
        public IActionResult CreateDetail(DetailDto detailDto)
        {
            if(_detailService.Create(DtoConverter.CovertToDetailEntity(detailDto)))
            {
                _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDetail(int id)
        {
            if(_detailService.Delete(id))
            {
                _unitOfWork.Commit();
                return Ok("success");
            }
            return BadRequest("error");
        }
    }
}

using CourseProject.Dto;
using CourseProject.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Converters
{
    public class DeliveryDtoConverter
    {
        public static DeliveryDto ConvertToDeliveryDto(Delivery delivery)
        {
            if (delivery == null)
            {
                return null;
            }
            return new DeliveryDto
            {
                ProviderId = delivery.ProviderId,
                DetailId = delivery.DetailId,
                Count = delivery.Count,
                Date = delivery.Date,
                Price = delivery.Price
            };
        }
        public static Delivery CovertToDeliveryEntity(DeliveryDto delivery)
        {
            if (delivery == null)
            {
                return null;
            }
            return new Delivery
            {
                ProviderId = delivery.ProviderId,
                DetailId = delivery.DetailId,
                Count = delivery.Count,
                Date = delivery.Date,
                Price = delivery.Price
            };
        }
    }
}

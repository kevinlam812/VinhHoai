﻿using System;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.OrderDetails.Dto
{
    public class CreateUpdateOrderDetailDto : EntityDto<Guid?>
    {
        public Guid? OrderId { get; set; }
        public int? Price { get; set; }
        public string Quantity { get; set; }
        public string OrderName { get; set; }
        public Guid? CustomerId { get; set; }
        public string Imagesource { get; set; }
        public string Size { get; set; }
    }
}

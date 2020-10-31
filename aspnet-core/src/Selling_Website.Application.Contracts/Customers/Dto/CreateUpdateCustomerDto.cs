﻿using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace Selling_Website.Customers.Dto
{
    public class CreateUpdateCustomerDto : EntityDto<Guid?>
    {
        public string Name { get; set; }
        public DateTime? DOB { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}

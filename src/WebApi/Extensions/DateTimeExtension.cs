namespace WebApi.Extensions
{
    public static class DateTimeExtension
    {
        public static int CalculateAge(this DateOnly dob)
        {
            var today = DateOnly.FromDateTime(DateTime.UtcNow);
            var age = today.Year - dob.Year;

            if (dob > today) return age --;

            return age;
        }
        
    }
}
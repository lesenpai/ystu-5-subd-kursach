class Company {
    constructor(
        ID, ShortName, FullName, Logo, 
        Country, City, Street, Building, Office,
        Descr, Url
    ) {
        this.ID = ID;
        this.ShortName = ShortName;
        this.FullName = FullName;
        this.Logo = Logo;
        this.Country = Country;
        this.City = City;
        this.Street = Street;
        this.Building = Building;
        this.Office = Office;
        this.Descr = Descr;
        this.Url = Url;
    }
}

module.exports = Company;
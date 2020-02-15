# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company1 = Company.create(
    ticker: "GOOG",
    name: "Alphabet, Inc.",
    market_cap: 1,518.73,
    avg_volume: 1423891
)

company2 = Company.create(
        ticker: "VZ",
        name: "Verizon Communications, Inc.",
        market_cap: 58.55,
        avg_volume: 9156287
)

company3 = Company.create(
    ticker: "AAPL",
    name: "Apple, Inc.",
    ceo: "Timothy Donald Cook",
    market_cap: 324.95,
    avg_volume: 20985371
)

company4 = Company.create(
    ticker: "AMZN",
    name: "Amazon.com, Inc.",
    market_cap: 2135.59,
    avg_volume: 2656221
)

company5 = Company.create(
    ticker: "PYPL",
    name: "PayPal Holdings, Inc.",
    market_cap: 122.95,
    avg_volume: 5899470
)
    

company6 = Company.create(
    ticker: "NFLX",
    name: "Netflix, Inc.",
    market_cap: 380.00,
    avg_volume: 3771008
)



company7 = Company.create(
    ticker: "JPM",
    name: "JPMorgan Chase & Co.",
    market_cap: 137.46,
    avg_volume: 6681361,
)
    

company8 = Company.create(
    ticker: "ORCL",
    name: "Oracle Corp.",
    market_cap: 55.47,
    avg_volume: 7509246,
)

company9 = Company.create(
    ticker: "TWTR",
    name: "Twitter, Inc.",
    market_cap: 36.91,
    avg_volume: 12207652
)

company10 = Company.create(
    ticker: "TSLA",
    name: "Tesla, Inc.",
    market_cap: 800.03, 
    avg_volume: 15798004
)


company11 = Company.create(
    ticker: "GE",
    name: "General Electric Co.",
    market_cap: 12.83,
    avg_volume: 37274507
)

company12 = Company.create(
        ticker: "MSFT",
        name: "Microsoft Corp.",
        market_cap: 185.35,
        avg_volume: 23656168
    )

company13 = Company.create(
        ticker: "FB",
        name: "Facebook, Inc.",
        market_cap: 214.18,
        avg_volume: 10726486
    )


company14 = Company.create(
    ticker: "UBER",
    name: "Uber Technologies, Inc.",
    market_cap: 39.66,
    avg_volume: 32075014,
)





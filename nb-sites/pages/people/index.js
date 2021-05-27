import PersonList from '../../components/PersonList'
import axios from 'axios'
const API_URL = 'placeholder_url'

const PeoplePage = () => {
    <PersonList people={people} />
}

export default PeoplePage;

export async function getServerSideProps(context) {
    //const peopleData = await axios.get(`${API_URL}/api/v1/people`)
    const peopleData = {
        "next": "/api/v1/people?__nonce=3OUjEzI6iyybc1F3sk6YrQ&__token=ADGvBW9wM69kUiss1KqTIyVeQ5M6OwiL6ttexRFnHK9m",
        "prev": null,
        "results": [
          {
            "birthdate": "1973-04-04",
            "city_district": null,
            "civicrm_id": 7,
            "county_district": "11",
            "county_file_id": "97076395",
            "created_at": "2014-02-02T11:51:23-05:00",
            "do_not_call": false,
            "do_not_contact": false,
            "dw_id": null,
            "email": "festeban@example.com",
            "email_opt_in": true,
            "employer": "Sun Film Foundation",
            "external_id": "781986",
            "federal_district": "0",
            "fire_district": null,
            "first_name": "Fernando",
            "has_facebook": false,
            "id": 453,
            "is_twitter_follower": false,
            "is_volunteer": false,
            "judicial_district": null,
            "labour_region": null,
            "last_name": "Esteban",
            "linkedin_id": null,
            "mobile": "5738882938",
            "mobile_opt_in": true,
            "nbec_guid": "000099dc-00f0-11e2-b349-27c4eb6c1979",
            "ngp_id": null,
            "note": "Has 3 kids. Ask about the baby on the way",
            "occupation": "Community Organizer",
            "party": "P",
            "pf_strat_id": 91207702,
            "phone": "2156726335",
            "precinct_id": null,
            "primary_address": {
              "address1": "448 S Hill St",
              "address2": "Suite 200",
              "address3": null,
              "city": "Los Angeles",
              "state": "CA",
              "country_code": "US",
              "zip": "90013",
              "lat": 34.0502,
              "lng": -117.2478
            },
            "profile_image_url_ssl": null,
            "recruiter_id": null,
            "rnc_id": 2653431,
            "rnc_regid": "003F4ED9-3C5C-4E15-8178-B84920F41BFF",
            "salesforce_id": null,
            "school_district": "Chicago Public Schools",
            "school_sub_district": null,
            "sex": "F",
            "signup_type": 0,
            "state_file_id": "100000012",
            "state_lower_district": "024",
            "state_upper_district": "1",
            "support_level": 1,
            "supranational_district": "Eastern Euro Region",
            "tags": [],
            "twitter_id": "63403772",
            "twitter_name": "AngryPig",
            "updated_at": "2014-02-02T11:51:23-05:00",
            "van_id": "2",
            "village_district": null
          },
          {
            "birthdate": "1943-03-06",
            "city_district": null,
            "civicrm_id": 9,
            "county_district": "12",
            "county_file_id": "27376395",
            "created_at": "2014-02-02T11:51:23-05:00",
            "do_not_call": false,
            "do_not_contact": false,
            "dw_id": null,
            "email": "alice@example.com",
            "email_opt_in": true,
            "employer": "Moon Film Foundation",
            "external_id": "381986",
            "federal_district": "0",
            "fire_district": null,
            "first_name": "Alice",
            "has_facebook": false,
            "id": 672,
            "is_twitter_follower": false,
            "is_volunteer": false,
            "judicial_district": null,
            "labour_region": null,
            "last_name": "Cooper",
            "linkedin_id": null,
            "mobile": "1242882938",
            "mobile_opt_in": true,
            "nbec_guid": "000088dc-00f0-11e2-b349-27c4eb6c1979",
            "ngp_id": null,
            "note": "Still single.",
            "occupation": "Community Organizer",
            "party": "P",
            "pf_strat_id": 21207702,
            "phone": "9216726335",
            "precinct_id": null,
            "primary_address": {
                "address1": "High St",
                "address2": "Apt 2312",
                "address3": "Suite 5A",
                "city": "Dallas",
                "state": "TX",
                "country_code": "US",
                "zip": "23891",
                "lat": 34.0502,
                "lng": -117.2478
            },
            "profile_image_url_ssl": null,
            "recruiter_id": null,
            "rnc_id": 2652231,
            "rnc_regid": "002D2ED9-3C5C-4E15-8178-B84920F41BFF",
            "salesforce_id": null,
            "school_district": "Dallas Public Schools",
            "school_sub_district": null,
            "sex": "F",
            "signup_type": 0,
            "state_file_id": "100000013",
            "state_lower_district": "024",
            "state_upper_district": "1",
            "support_level": 1,
            "supranational_district": "Scotland Euro Region",
            "tags": [],
            "twitter_id": "13203772",
            "twitter_name": "AngryBird",
            "updated_at": "2014-02-02T11:51:23-05:00",
            "van_id": "2",
            "village_district": null
          }
        ]
      }
    const arrOfPeople = peopleData.results

    

    return {
        props: {
            people: arrOfPeople
        }, // will be passed to the page component as props
    }
}
/**
 * @swagger
 * /signup :
 *      post:
 *           summary: SignUp Request
 *           description: Post Signup Request 
 *           tags:  
 *             - Public
 *           requestBody:
 *               required: true    
 *               content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            first_name:
 *                                type: string
 *                                default: First Name
 *                            last_name:
 *                                type: string
 *                                default: Last Name
 *                            email:
 *                                type: string
 *                                default: Email Address
 *                            password:
 *                                type: string 
 *                                default: Password 
 *                            contact:
 *                                type: integer
 *                                default: 9876543210
 *                            remenber_token:
 *                                type: integer 
 *                                default: 0
 *                            is_verified:
 *                                type: integer 
 *                                default: 0
 *                            referrer_id:
 *                                type: integer 
 *                                default: 0   
 *                            terms:
 *                                type: integer 
 *                                default: 0 
 *                            role_id:
 *                                type: integer 
 *                                default: 3
 *                            user_type:
 *                                type: integer 
 *                                default: 1
 *  
 *                            country_code:
 *                                type: integer 
 *                                default: 91 
 *                            country_name:
 *                                type: string 
 *                                default: India  
 *                            jobs_user_id:
 *                                type: integer 
 *                            job_id:
 *                                type: integer
 *                            favoriteCompany:
 *                                type: string
 *                            favoriteJobs:
 *                                type: string
 *                            favoriteTalent:
 *                                type: string
 *                                 
 *                                              

 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: success
 *                               token: 
 *                                 type: string
 *                                 default: Token
 *                               data:
 *                                  type: object 
 *                                  properties:
 *                                      user_id:
 *                                          type: integer
 *                                      role_id:
 *                                          type: integer
 *                                      fName:
 *                                          type: string
 *                                          default: First Name
 *                                      lName:
 *                                          type: string
 *                                          default: Last Name
 *                                      Email:
 *                                          type: string
 *                                          default: Email address
 *                                      user_type:
 *                                          type: integer
 *                                      personality:
 *                                          type: integer
 *                                      contact:
 *                                          type: integer
 *                                          default: 9876543210
 *                                      country_code:
 *                                          type: integer
 *                                          default: 91                        
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: error
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                               description:
 *                                 type: string
 *                                 default: Message Description
 *                                              
  */

/**
 * @swagger
 * /login :
 *      post:
 *           summary: Login Request
 *           description: Post Login Request 
 *           tags:  
 *             - Public
 *           requestBody:
 *               required: true    
 *               content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            username:
 *                                type: string
 *                                default: User Name
 *                            password:
 *                                type: string
 *                                default: Password                          
 *                            jobs_user_id:
 *                                type: integer 
 *                            job_id:
 *                                type: integer
 *                            favoriteCompany:
 *                                type: string
 *                            favoriteJobs:
 *                                type: string
 *                            favoriteTalent:
 *                                type: string
 *                                 
 *                                              

 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: success
 *                               token: 
 *                                 type: string
 *                                 default: Token
 *                               data:
 *                                  type: object 
 *                                  properties:
 *                                      user_id:
 *                                          type: integer
 *                                      role_id:
 *                                          type: integer
 *                                      fName:
 *                                          type: string
 *                                          default: First Name
 *                                      lName:
 *                                          type: string
 *                                          default: Last Name
 *                                      Email:
 *                                          type: string
 *                                          default: Email address
 *                                      user_type:
 *                                          type: integer
 *                                      personality:
 *                                          type: integer
 *                                      contact:
 *                                          type: integer
 *                                          default: 9876543210
 *                                      profile_percent_complete:
 *                                          type: integer
 *                                      jobs_user_id:
 *                                          type: integer
 *                        
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: error
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                               description:
 *                                 type: string
 *                                 default: Message Description
 *                                              
  */

/**
 * @swagger
 * /getallroles :
 *      get:
 *           summary: Get all Roles Request
 *           description: Get all Roles Request 
 *           tags:  
 *             - Public
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: status
 *                               data: 
 *                                 type: string
 *                               
 *                                      
 *                400:
 *                    description: Bad Request.
 *                    content:
 *                       application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                status:
 *                                  type: string
 *                                  default: error
 *                                message:
 *                                  type: string
 *                                  default: Message
 *                                description:
 *                                  type: string
 *                                  default: Message Description
 *                
 *                
              
 *                   
  */

/**
 * @swagger
 * /cv/getcvpage :
 *    get:
 *      summary: CV Page Request
 *      description: Get CV Page Request
 *      tags:
 *        - Public
 *      parameters:
 *        - name: user_id
 *          in: query
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    default: success
 *                  token:
 *                    type: string
 *                    default: Token
 *                  data:
 *                    type: object
 *                    properties:
 *                      user_id:
 *                        type: integer
 *                      highest_qualification_id:
 *                        type: integer
 *                      employment_type:
 *                        type: string
 *                      work_setup:
 *                        type: string
 *                      qualification_level:
 *                        type: integer
 *                      grit_score:
 *                        type: integer
 *                      cv_link:
 *                        type: string
 *                      UserIndustries:
 *                        type: string
 *                      UserNationality:
 *                        type: string
 *                      UserLanguage:
 *                        type: string
 *                      UserAssociation:
 *                        type: string
 *                      UserSchool:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            name:
 *                              type: string
 *                            year_ended:
 *                              type: string
 *                      UserSkills:
 *                        type: string
 *                      UserTools:
 *                        type: string
 *                      UserTraits:
 *                        type: string
 *                      first_name:
 *                        type: string
 *                      last_name:
 *                        type: string
 *                      email:
 *                        type: string
 *                        format: email
 *                      user_created_at:
 *                        type: string
 *                        format: date-time
 *                      user_updated_at:
 *                        type: string
 *                        format: date-time
 *                      last_login_at:
 *                        type: string
 *                        format: date-time
 *                      primaryName:
 *                        type: string
 *                      primaryPersonality_id:
 *                        type: integer
 *                      shadowName:
 *                        type: string
 *                      shadowPersonality_id:
 *                        type: integer
 *                      experienceYear:
 *                        type: string
 *                      experienceId:
 *                        type: integer
 *                      experienceYearStart:
 *                        type: integer
 *                      experienceYearEnd:
 *                        type: integer
 *                      salary_id:
 *                        type: integer
 *                      salaryMin:
 *                        type: integer
 *                      salaryMax:
 *                        type: integer
 *                      currency_id:
 *                        type: integer
 *                      currencySymbol:
 *                        type: string
 *                      job_status_id:
 *                        type: integer
 *                      job_title_id:
 *                        type: integer
 *                      jobTitle:
 *                        type: string
 *                      dream_job_title_id:
 *                        type: integer
 *                      DreamJobTitle:
 *                        type: string
 *                      seeking_job:
 *                        type: integer
 *                      skinz:
 *                        type: string
 *                      profile_pic:
 *                        type: string
 *                      candidateProfile_created_at:
 *                        type: string
 *                        format: date-time
 *                      candidateProfile_updated_at:
 *                        type: string
 *                        format: date-time
 *                      profile_percent_complete:
 *                        type: integer
 *                      town_id:
 *                        type: integer
 *                      town_name:
 *                        type: string
 *                      country_name:
 *                        type: string
 *                      region_name:
 *                        type: string
 *                      contact_no:
 *                        type: string
 *                      gender:
 *                        type: string
 *                      dob:
 *                        type: string
 *                        format: date-time
 *                      linkedin_profile_link:
 *                        type: string
 *                      my_bio:
 *                        type: string
 *                      own_transport:
 *                        type: string
 *                      own_equipment:
 *                        type: string
 *                      internet_access:
 *                        type: string
 *                      relocate:
 *                        type: string
 *                      noticePeriod_description:
 *                        type: string
 *                      work_exp:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            employer_history_id:
 *                              type: integer
 *                            user_id:
 *                              type: integer
 *                            name:
 *                              type: string
 *                            title:
 *                              type: string
 *                            location:
 *                              type: string
 *                            start_date:
 *                              type: string
 *                              format: date-time
 *                            end_date:
 *                              type: string
 *                              format: date-time
 *                            currently_employed_here:
 *                              type: integer
 *                            description:
 *                              type: string
 *                            clients_worked_on_awards:
 *                              type: string
 *                            created_at:
 *                              type: string
 *                              format: date-time
 *                            updated_at:
 *                              type: string
 *                              format: date-time
 *                      UserQualification:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            qualification_id:
 *                              type: integer
 *                            qualificationtype_id:
 *                              type: integer
 *                            year_ended:
 *                              type: string
 *                              format: date-time
 *                            qualification:
 *                              type: object
 *                              properties:
 *                                name:
 *                                  type: string
 *                            qualification_type:
 *                              type: object
 *                              properties:
 *                                name:
 *                                  type: string
 *                      profile_url:
 *                        type: string
 *                      cv_url:
 *                        type: string
 *                      HighestQual:
 *                        type: string
 *        400:
 *          description: Bad Request.
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                      status:
 *                        type: string
 *                        default: error
 *                      message:
 *                        type: string
 *                        default: Message
 *                      description:
 *                        type: string
 *                        default: Message Description
 *
 */

/**
 * @swagger
 * /candidate/getquestionwithoutlogin :
 *      get:
 *           summary: Get Question without Login Request
 *           description: Get Question without Login Request 
 *           tags:  
 *             - Public
 *           parameters:
 *            - name: job_id
 *              in: query
 *              required: true
 *              schema:
 *                type: integer
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: success
 *                               data: 
 *                                 type: array
 *                                 items:
 *                                    type: object
 *                                    properties:
 *                                       question:
 *                                         type: string
 *                                         default: Question
 *                                       question_id:
 *                                         type: integer                                      
 *                                       job_id:
 *                                         type: integer
 *                                      
 *                                    
 *                               
 *                                      
 *                                 
 *                400:
 *                 description: Bad Request.
 *                 content:
 *                    application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                             status:
 *                               type: string
 *                               default: error
 *                             message:
 *                               type: string
 *                               default: Message
 *                             description:
 *                               type: string
 *                               default: Message Description
 *                
              
 *                   
  */

/**
 * @swagger
 * /personalities :
 *      get:
 *           summary: Get Personalities Request
 *           description: Get Personalities Request 
 *           tags:  
 *             - Public
 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: success
 *                               data: 
 *                                  type: array
 *                                  items:
 *                                    type: object
 *                                    properties:
 *                                      personality_id:
 *                                        type: integer
 *                                      name:
 *                                        type: string
 *                                      reference:
 *                                        type: string
 *                                      logo:
 *                                        type: string
 *                                      image:
 *                                        type: string
 *                                      border_line_css_class:
 *                                        type: string
 *                                      bg_css_class:
 *                                        type: string
 *                                      text_css_class:
 *                                        type: string
 *                                      level:
 *                                        type: string
 *                                      created_at:
 *                                        type: string
 *                                        format: date-time
 *                                      updated_at:
 *                                        type: string
 *                                        format: date-time
 *                                      
 *                                    
 *                               
 *                                      
 *                                 
 *                400:
 *                 description: Bad Request.
 *                 content:
 *                    application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                             status:
 *                               type: string
 *                               default: error
 *                             message:
 *                               type: string
 *                               default: Message
 *                             description:
 *                               type: string
 *                               default: Message Description
 *                
              
 *                   
  */

/**
* @swagger
* /jobs/getjob :
*  get:
*      summary: Get Jobs  Request
*      description: Get Jobs Request 
*      tags:  
*        - Public
*      parameters:
*       - name: job_id
*         in: query
*         required: true
*         schema:
*           type: integer
*       - name: authorization
*         in: query
*         required: false
*         schema:
*           type: string
*      
*      responses:
*        200:
*          description: Success
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  job_id:
*                    type: integer
*                  user_id:
*                    type: integer
*                  title:
*                    type: string
*                  description:
*                    type: string
*                  job_bio:
*                    type: string
*                  post_incognito:
*                    type: string
*                  job_summary_flag:
*                    type: string
*                  role_responsibilty:
*                    type: string
*                  role_requirements:
*                    type: string
*                  job_notes:
*                    type: string
*                  type:
*                    type: string
*                  grit_score:
*                    type: integer
*                  job_stage:
*                    type: integer
*                  created_at:
*                    type: string
*                    format: date-time
*                  updated_at:
*                    type: string
*                    format: date-time
*                  job_type:
*                    type: string
*                  required_qualification_id:
*                    type: integer
*                  work_setup:
*                    type: string
*                  own_transport:
*                    type: string
*                  job_start_date:
*                    type: string
*                    format: date-time
*                  own_equipment:
*                    type: string
*                  internet_access:
*                    type: string
*                  contract_duration:
*                    type: string
*                  company_id:
*                    type: integer
*                  job_video:
*                    type: string
*                  job_comments:
*                    type: array
*                    items: {}
*                  job_languages:
*                    type: array
*                    items: {}
*                  association_jobs:
*                    type: array
*                    items:
*                      type: object
*                      properties:
*                        association_id:
*                          type: integer
*                        association:
*                          type: object
*                          properties:
*                            name:
*                              type: string
*                  highest_qualification:
*                    type: object
*                    properties:
*                      qualification_id:
*                        type: integer
*                      qualification:
*                        type: object
*                        properties:
*                          name:
*                            type: string
*                  town:
*                    type: string
*                  job_status:
*                    type: object
*                    properties:
*                      name:
*                        type: string
*                      job_status_id:
*                        type: integer
*                  job_qualifications:
*                    type: array
*                    items:
*                      type: object
*                      properties:
*                        qualification_id:
*                          type: integer
*                        qualification:
*                          type: object
*                          properties:
*                            name:
*                              type: string
*                  job_questions:
*                    type: array
*                    items: {}
*                  job_tags:
*                    type: array
*                    items: {}
*                  job_traits:
*                    type: array
*                    items: {}
*                  job_tools:
*                    type: array
*                    items:
*                      type: object
*                      properties:
*                        tool_id:
*                          type: integer
*                        tool:
*                          type: object
*                          properties:
*                            name:
*                              type: string
*                  stage:
*                    type: object
*                    properties:
*                      name:
*                        type: string
*                  primary:
*                    type: object
*                    properties:
*                      name:
*                        type: string
*                      personality_id:
*                        type: integer
*                  shadow:
*                    type: object
*                    properties:
*                      name:
*                        type: string
*                      personality_id:
*                        type: integer
*                  industry_jobs:
*                    type: array
*                    items: {}
*                  experience:
*                    type: object
*                    properties:
*                      year:
*                        type: string
*                      year_start:
*                        type: integer
*                      year_end:
*                        type: integer
*                  employer_profile:
*                    type: string
*                  salary:
*                    type: string
*                  company:
*                    type: string
*                  profile_url:
*                    type: string
*                  company_video_url:
*                    type: string
*                  video_url:
*                    type: string
*                  TotalUserCount:
*                    type: integer
*                  TotalUserShortlisted:
*                    type: integer
*                  TotalUserInterviewed:
*                    type: integer                                 
*        400:
*                 description: Bad Request.
*                 content:
*                    application/json:
*                       schema:
*                           type: object
*                           properties:
*                             status:
*                               type: string
*                               default: error
*                             message:
*                               type: string
*                               default: Message
*                             description:
*                               type: string
*                               default: Message Description
*                
             
*                   
*/

/**
* @swagger
* /getjobslist/filter :
*    get:
*     summary: Get Jobs List With Filter  Request
*     description: Get Jobs List With Filter Request 
*     tags:  
*        - Public
*     parameters:
*        - name: query
*          in: query
*          description: Search query
*          required: false
*          type: string
*        - name: authorization
*          in: query
*          description: Authorization token
*          required: false
*          type: string
*        - name: limit
*          in: query
*          description: Limit number of results
*          required: false
*          type: integer
*        - name: lastKey
*          in: query
*          description: Last key for pagination
*          required: false
*          type: string
*        - name: companysize
*          in: query
*          description: Company size
*          required: false
*          type: string
*        - name: companytype
*          in: query
*          description: Company type
*          required: false
*          type: string
*        - name: job_title
*          in: query
*          description: Job title
*          required: false
*          type: string
*        - name: region_id
*          in: query
*          description: Region ID
*          required: false
*          type: integer
*        - name: town_id
*          in: query
*          description: Town ID
*          required: false
*          type: integer
*        - name: industry_id
*          in: query
*          description: Industry ID
*          required: false
*          type: integer
*        - name: tool_id
*          in: query
*          description: Tool ID
*          required: false
*          type: integer
*        - name: tag_id
*          in: query
*          description: Tag ID
*          required: false
*          type: integer
*        - name: experience
*          in: query
*          description: Experience
*          required: false
*          type: string
*        - name: salary
*          in: query
*          description: Salary
*          required: false
*          type: string
*        - name: jobtype_id
*          in: query
*          description: Job type ID
*          required: true
*          type: integer
*        - name: jobstage_id
*          in: query
*          description: Job stage ID
*          required: false
*          type: integer
*        - name: personalitytype_id
*          in: query
*          description: Personality type ID
*          required: false
*          type: integer
*        - name: title
*          in: query
*          description: Title
*          required: false
*          type: string
*        - name: favourite
*          in: query
*          description: Flag for favorite jobs
*          required: false
*          type: string
*        - name: appliedjobs
*          in: query
*          description: Flag for applied jobs
*          required: false
*          type: string
*        - name: recent
*          in: query
*          description: Flag for recent jobs
*          required: false
*          type: string
*        - name: company_id
*          in: query
*          description: Company ID
*          required: false
*          type: integer
*        - name: highest_qualification_id
*          in: query
*          description: Highest qualification ID
*          required: false
*          type: integer
*        - name: currency_id
*          in: query
*          description: Currency ID
*          required: false
*          type: integer
*     responses:
*           
*
*      200:
*       description: Successful operation
*       content:
*        application/json:
*         schema:
*          type: array
*          items:
*            type: object
*            properties:
*              job_id:
*                type: integer
*              user_id:
*                type: integer
*              job_start_date:
*                type: string
*                format: date
*              company_id:
*                type: integer
*              title:
*                type: string
*              description:
*                type: string
*              job_bio:
*                type: string
*              post_incognito:
*                type: boolean
*              job_summary_flag:
*                type: string
*              type:
*                type: string
*              job_stage:
*                type: integer
*              created_at:
*                type: string
*                format: date-time
*              updated_at:
*                type: string
*                format: date-time
*              job_type:
*                type: string
*              grit_score:
*                type: integer
*              required_qualification_id:
*                type: integer
*              work_setup:
*                type: string
*              job_video:
*                type: string
*              job_status_id:
*                type: integer
*              TotalUserCount:
*                type: integer
*              totalusershorlisted:
*                type: integer
*              totaluserinterviewed:
*                type: integer
*              JobTraits:
*                type: string
*              JobSkills:
*                type: string
*              JobTools:
*                type: string
*              JobIndustries:
*                type: string
*              town_id:
*                type: integer
*              town_name:
*                type: string
*              region_id:
*                type: integer
*              town.region.region_id:
*                type: integer
*              region_name:
*                type: string
*              country_name:
*                type: string
*              job_status_name:
*                type: string
*              job_status_icon:
*                type: string
*              job_status_level:
*                type: string
*              job_status_created_at:
*                type: string
*                format: date-time
*              job_status_updated_at:
*                type: string
*                format: date-time
*              job_stage_id:
*                type: integer
*              stage_name:
*                type: string
*              primary_name:
*                type: string
*              primary_personality_id:
*                type: integer
*              shadow_name:
*                type: string
*              shadow_personality_id:
*                type: integer
*              experience_id:
*                type: integer
*              experience_year:
*                type: string
*              experience_year_start:
*                type: integer
*              experience_year_end:
*                type: integer
*              employer_profile_user_id:
*                type: integer
*              employer_profile_profile_pic:
*                type: string
*              employer_profile_contact_no:
*                type: string
*              employer_profile_hyperlink:
*                type: string
*              employer_profile_company_name:
*                type: string
*              salary_id:
*                type: integer
*              salary_max:
*                type: integer
*              salary_min:
*                type: integer
*              currency_id:
*                type: integer
*              currency_symbol:
*                type: string
*              CompanyName:
*                type: string
*              CompanyLogo:
*                type: string
*              CompanySize:
*                type: string
*              CompanyType:
*                type: string
*              favoriteJob:
*                type: boolean
*              profile_url:
*                type: string
*              applidflag:
*                type: boolean

*      400:
*                 description: Bad Request.
*                 content:
*                    application/json:
*                       schema:
*                           type: object
*                           properties:
*                             status:
*                               type: string
*                               default: error
*                             message:
*                               type: string
*                               default: Message
*                             description:
*                               type: string
*                               default: Message Description
*                
             
*                   
*/

/**
 * @swagger
 * /signup :
 *      post:
 *           summary: SignUp Request
 *           description: Post Signup Request 
 *           tags:  
 *             - Public
 *            
 *             
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
* /gettalentslist:
*   get:
*     summary: Get Talents List Request
*     description: Get Talents List Request
*     tags:
*       - Public
*     parameters:
*       - name: query
*         in: query
*         required: false
*         type: string
*       - name: authorization
*         in: query
*         required: false
*         type: string
*       - name: mytalent
*         in: query
*         required: false
*         type: string
*       - name: recent
*         in: query
*         required: false
*         type: string
*       - name: active
*         in: query
*         required: false
*         type: string
*       - name: indemand
*         in: query
*         required: false
*         type: string
*       - name: favourite
*         in: query
*         required: false
*         type: string
*       - name: town_id
*         in: query
*         required: false
*         type: integer
*       - name: region_id
*         in: query
*         required: false
*         type: integer
*       - name: tool_id
*         in: query
*         required: false
*         type: integer
*       - name: employment_type
*         in: query
*         required: false
*         type: string
*       - name: industry_id
*         in: query
*         required: false
*         type: integer
*       - name: personalitytype_id
*         in: query
*         required: false
*         type: integer
*       - name: nationality_id
*         in: query
*         required: false
*         type: integer
*       - name: talent_title
*         in: query
*         required: false
*         type: string
*       - name: tag_id
*         in: query
*         required: false
*         type: integer
*       - name: qualification_id
*         in: query
*         required: false
*         type: integer
*       - name: institution_id
*         in: query
*         required: false
*         type: integer
*       - name: school_id
*         in: query
*         required: false
*         type: integer
*       - name: association_id
*         in: query
*         required: false
*         type: integer
*       - name: language_id
*         in: query
*         required: false
*         type: integer
*       - name: salary
*         in: query
*         required: false
*         type: string
*       - name: experience
*         in: query
*         required: false
*         type: string
*       - name: highest_qualification_id
*         in: query
*         required: false
*         type: integer
*       - name: currency_id
*         in: query
*         required: false
*         type: integer
*       - name: work_setup
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Success
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   default: success
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       user_id:
*                         type: integer
*                       highest_qualification_id:
*                         type: integer
*                       employment_type:
*                         type: string
*                       work_setup:
*                         type: string
*                       qualification_level:
*                         type: integer
*                       grit_score:
*                         type: null
*                       cam_link:
*                         type: null
*                       TotalUserCount:
*                         type: string
*                       totalusershorlisted:
*                         type: string
*                       totaluserinterviewed:
*                         type: string
*                       UserTools:
*                         type: string
*                       UserSkills:
*                         type: string
*                       UserTraits:
*                         type: null
*                       UserIndustries:
*                         type: string
*                       first_name:
*                         type: string
*                       last_name:
*                         type: string
*                       email:
*                         type: string
*                       user_created_at:
*                         type: string
*                         format: date-time
*                       user_updated_at:
*                         type: string
*                         format: date-time
*                       last_login_at:
*                         type: string
*                         format: date-time
*                       primaryName:
*                         type: null
*                       primaryPersonality_id:
*                         type: null
*                       shadowName:
*                         type: null
*                       shadowPersonality_id:
*                         type: null
*                       experienceYear:
*                         type: string
*                       experienceId:
*                         type: integer
*                       experienceYearStart:
*                         type: integer
*                       experienceYearEnd:
*                         type: integer
*                       salary_id:
*                         type: integer
*                       salaryMin:
*                         type: integer
*                       salaryMax:
*                         type: integer
*                       currency_id:
*                         type: integer
*                       currencySymbol:
*                         type: string
*                       job_status_id:
*                         type: integer
*                       job_title_id:
*                         type: integer
*                       jobTitle:
*                         type: string
*                       seeking_job:
*                         type: null
*                       profile_pic:
*                         type: null
*                       candidateProfile_created_at:
*                         type: string
*                         format: date-time
*                       candidateProfile_updated_at:
*                         type: string
*                         format: date-time
*                       profile_percent_complete:
*                         type: integer
*                       town_id:
*                         type: integer
*                       town_name:
*                         type: string
*                       country_name:
*                         type: string
*                       contact_no:
*                         type: string
*                       gender:
*                         type: string
*                       dob:
*                         type: string
*                         format: date-time
*                       linkedin_profile_link:
*                         type: string
*                       my_bio:
*                         type: string
*                       noticePeriod_description:
*                         type: string
*                       firstactivity:
*                         type: string
*                       secondactivity:
*                         type: null
*                       favourite_talent:
*                         type: boolean
*                       profile_url:
*                         type: string
*                 pagenumber:
*                   type: integer
*       400:
*         description: Bad Request.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   default: error
*                 message:
*                   type: string
*                   default: Message
*                 description:
*                   type: string
*                   default: Message Description
      
*/

/**

* @swagger
* /industries:
*   get:
*     summary: Get Industries  Request
*     description: Get Industries  Request
*     tags:
*       - Public
*     parameters:
*       - name: limit
*         in: query
*         required: false
*         type: integer
*       - name: title
*         in: query
*         required: false
*         type: string
*       - name: lastkey
*         in: query
*         required: false
*         type: integer
*     responses:
*       200:
*         description: Success
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   default: success
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       industry_id:
*                         type: integer
*                       name:
*                         type: string
*                       created_at:
*                         type: string
*                         format: date-time
*                       updated_at:
*                         type: string
*                         format: date-time

*       400:
*         description: Bad Request.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   default: error
*                 message:
*                   type: string
*                   default: Message
*                 description:
*                   type: string
*                   default: Message Description
      
*/

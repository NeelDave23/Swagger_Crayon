/**
* @swagger
* /jobs/getjob :
*  get:
*      summary: Get Jobs  Request
*      description: Get Jobs Request 
*      tags:  
*        - Public (Jobs)
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
*        - Public (Jobs)
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

/**

* @swagger
* /job/roletypes:
*   get:
*     summary: Get Job Role types  Request
*     description: Get Job Role types  Request
*     tags:
*       - Public (Jobs)
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
*                       job_role_type_id:
*                         type: integer
*                       name:
*                         type: string
*                       id:
*                         type: integer
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
* /job/worktypes:
*   get:
*     summary: Get Job Work  types  Request
*     description: Get Job Work  types  Request
*     tags:
*       - Public (Jobs)
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
*                       job_work_type_id:
*                         type: integer
*                       name:
*                         type: string
*                       id:
*                         type: integer
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
* /job/types:
*   get:
*     summary: Get Job types  Request
*     description: Get Job types  Request
*     tags:
*       - Public (Jobs)
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
*                       job_role_type_id:
*                         type: integer
*                       name:
*                         type: string

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
* /job/stages:
*   get:
*     summary: Get Job stages  Request
*     description: Get Job stages  Request
*     tags:
*       - Public (Jobs)
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
*                       job_stage_id:
*                         type: integer
*                       name:
*                         type: string
*                       description:
*                         type: string

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
 * /job/titles:
 *   get:
 *     summary: Get Job Titles Request
 *     description: Get Job Titles Request
 *     tags:
 *       - Public (Jobs)
 *     parameters:
 *       - name: lastKey
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         in: query
 *         required: false
 *         type: integer
 *       - name: title
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
 *                       job_title_id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       approved:
 *                         type: integer
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

/**
 * @swagger
 * /job/jobvideolink:
 *   get:
 *     summary: Get Job Video Link Request
 *     description: Get Job Video Link Request
 *     tags:
 *       - Public (Jobs)
 *     parameters:
 *       - name: job_id
 *         in: query
 *         required: true
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
 *                   type: object
 *                   properties:
 *                       job_id:
 *                         type: integer
 *                       job_video:
 *                         type: string
 *                       job_video_url:
 *                         type: string
  
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
 * /job/jobmatching:
 *   get:
 *     summary: Get Job Matching Details Request
 *     description: Get Job Matching Details Request
 *     tags:
 *       - Public (Jobs)
 *     parameters:
 *       - name: candidate_user_id
 *         in: query
 *         required: true
 *         type: integer
 *       - name: job_id
 *         in: query
 *         required: true
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
 *                   type: object
 *                   properties:
 *                      matchingPercentage:
 *                         type: integer
  
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
 * /job/testmatch:
 *   get:
 *     summary: Get Job- Test Match   Request
 *     description: Get Job- Test Match   Request
 *     tags:
 *       - Public (Jobs)
 *     parameters:
 *       - name: job_id
 *         in: query
 *         required: true
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
 *                   default: completing, it will take some time, Meanwhile You can see in managment dashboard and refresh the page for new data
  
  
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
 * /job/userjobmatching:
 *   get:
 *     summary: Get User Job Matching Request
 *     description: Get User Job Matching Request
 *     tags:
 *       - Public (Jobs)
 *     parameters:
 *       - name: job_id
 *         in: query
 *         required: true
 *         type: integer
 *       - name: user_id
 *         in: query
 *         required: true
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
 *                   default: completed
 *                 data:
 *                   type: object
 *                   properties:
 *                     newobj:
 *                       type: object
 *                       properties:
 *                         totalmatchingpercentage:
 *                           type: number
 *                           default: 0
 *                         TitlePercentage:
 *                           type: number
 *                           default: 0
 *                         DreamTitlePercentage:
 *                           type: number
 *                           default: 0
 *                         HighestQuelPercentage:
 *                           type: number
 *                           default: 0
 *                         ExperiancePercentage:
 *                           type: number
 *                           default: 0
 *                         SalaryPercentage:
 *                           type: number
 *                           default: 0
 *                         IndustryPercentage:
 *                           type: number
 *                           default: 0
 *                         SkillsPercentage:
 *                           type: number
 *                           default: 0
 *                         ToolsPercentage:
 *                           type: number
 *                           default: 0
 *                         TraitsPercentage:
 *                           type: number
 *                           default: 0
 *                         PersonalityPercentage:
 *                           type: number
 *                           default: 0
 *                         GritScorePercentage:
 *                           type: number
 *                           default: 0
 *                         LocationPercentage:
 *                           type: number
 *                           default: 0
 *                         activeuserpercentage:
 *                           type: number
 *                           default: 0
 *                         indemanduserpercentage:
 *                           type: number
 *                           default: 0
 *                         QualificationPercentage:
 *                           type: number
 *                           default: 0
 *                         AssociationPercentage:
 *                           type: number
 *                           default: 0
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

/**
 * @swagger
 * paths:
 *   /job/get:
 *     get:
 *       summary: Get Job Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Job Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: job_id
 *           in: query
 *           required: true
 *           description: The ID of the job
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                       basics:
 *                         type: object
 *                         properties:
 *                           user_id:
 *                             type: integer
 *                           company_id:
 *                             type: integer
 *                           job_id:
 *                             type: integer
 *                           job_title_id:
 *                             type: string
 *                           job_role_type:
 *                             type: string
 *                           salary_id:
 *                             type: integer
 *                           hide_salary:
 *                             type: integer
 *                           town_id:
 *                             type: integer
 *                           experience_id:
 *                             type: integer
 *                           work_setup:
 *                             type: string
 *                           salary_negotiate:
 *                             type: boolean
 *                           required_qualification_id:
 *                             type: integer
 *                           role_summary:
 *                             type: string
 *                           job_bio:
 *                             type: string
 *                           job_summary_flag:
 *                             type: string
 *                           role_responsibility:
 *                             type: string
 *                           job_notes:
 *                             type: string
 *                           role_requirements:
 *                             type: string
 *                           primary_personality:
 *                             type: string
 *                           shadow_personality:
 *                             type: string
 *                           job_video:
 *                             type: string
 *                           job_start_date:
 *                             type: string
 *                           skills:
 *                             type: array
 *                             items:
 *                               type: integer
 *                           tools:
 *                             type: array
 *                             items:
 *                               type: integer
 *                           preferred_qualification_ids:
 *                             type: array
 *                             items:
 *                               type: integer
 *                           currency_id:
 *                             type: integer
 *                           country_id:
 *                             type: integer
 *                       details:
 *                         type: object
 *                         properties:
 *                           role_requirements:
 *                             type: string
 *                           role_responsibility:
 *                             type: string
 *                           role_summary:
 *                             type: string
 *                           job_bio:
 *                             type: string
 *                           job_summary_flag:
 *                             type: string
 *                       culture:
 *                         type: object
 *                         properties:
 *                           primary_personality:
 *                             type: string
 *                           shadow_personality:
 *                             type: string
 *                           traits:
 *                             type: array
 *                             items:
 *                               type: string
 *                           screen_questions:
 *                             type: array
 *                             items:
 *                               type: string
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /job/getJobBasics:
 *     get:
 *       summary: Get Job Basics Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Job Basics Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: job_id
 *           in: query
 *           required: true
 *           description: The ID of the job
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                       user_id:
 *                         type: integer
 *                       company_id:
 *                         type: integer
 *                       job_id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       job_role_type:
 *                         type: string
 *                       salary_id:
 *                         type: integer
 *                       hide_salary:
 *                         type: null
 *                       town_id:
 *                         type: integer
 *                       experience_id:
 *                         type: integer
 *                       work_setup:
 *                         type: string
 *                       salary_negotiate:
 *                         type: null
 *                       required_qualification_id:
 *                         type: integer
 *                       job_type:
 *                         type: string
 *                       own_transport:
 *                         type: null
 *                       own_equipment:
 *                         type: null
 *                       internet_access:
 *                         type: null
 *                       contract_duration:
 *                         type: null
 *                       post_incognito:
 *                         type: null
 *                       is_video_require:
 *                         type: null
 *                       is_interview_require:
 *                         type: null
 *                       skinz:
 *                         type: null
 *                       gender:
 *                         type: null
 *                       skinz_flag:
 *                         type: null
 *                       gender_flag:
 *                         type: null
 *                       nationality_flag:
 *                         type: null
 *                       country_id:
 *                         type: integer
 *                       job_start_date:
 *                         type: string
 *                       candidate_video_complete_flag:
 *                         type: null
 *                       town_name:
 *                         type: string
 *                       country_name:
 *                         type: string
 *                       job_title_id:
 *                         type: integer
 *                       salary:
 *                         type: array
 *                         items:
 *                           type: integer
 *                       experience:
 *                         type: array
 *                         items:
 *                           type: integer
 *                       skills:
 *                         type: array
 *                         items:
 *                           type: string
 *                       nationality_ids:
 *                         type: array
 *                         items:
 *                           type: integer
 *                       industry_id:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             industry_id:
 *                               type: integer
 *                             industry_name:
 *                               type: string
 *                       language_ids:
 *                         type: array
 *                         items:
 *                           type: integer
 *                       association_ids:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             association_id:
 *                               type: integer
 *                             association_name:
 *                               type: string
 *                       tools:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             tool_id:
 *                               type: integer
 *                             tool_name:
 *                               type: string
 *                       preferred_qualification_ids:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             qualification_id:
 *                               type: integer
 *                             qualification_name:
 *                               type: string
 *                       currency_id:
 *                         type: integer
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /job/getJobTheDetails:
 *     get:
 *       summary: Get Job The Details Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Job The Details Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: job_id
 *           in: query
 *           required: true
 *           description: The ID of the job
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                       job_id:
 *                         type: integer
 *                       role_summary:
 *                         type: string
 *                       job_bio:
 *                         type: null
 *                       job_summary_flag:
 *                         type: null
 *                       role_responsibility:
 *                         type: null
 *                       role_requirements:
 *                         type: null
 *                       job_notes:
 *                         type: null
 *                       job_start_date:
 *                         type: string
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /job/getJobCulture:
 *     get:
 *       summary: Get Job Culture Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Job Culture Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: job_id
 *           in: query
 *           required: true
 *           description: The ID of the job
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                       jobDetails:
 *                         type: object
 *                         properties:
 *                           user_id:
 *                             type: integer
 *                           job_id:
 *                             type: integer
 *                           primary_personality:
 *                             type: integer
 *                           shadow_personality:
 *                             type: integer
 *                           grit_score:
 *                             type: null
 *                           candidate_video_complete_flag:
 *                             type: null
 *                           video_description:
 *                             type: null
 *                           video_for_shortlisted_flag:
 *                             type: null
 *                           job_type:
 *                             type: string
 *                           post_incognito:
 *                             type: null
 *                           is_video_require:
 *                             type: null
 *                       screen_questions:
 *                         type: array
 *                         items: {}
 *                       traits:
 *                         type: array
 *                         items:
 *                           type: integer
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /job/getEmployerComapny:
 *     get:
 *       summary: Get Employer Company Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Employer Company Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: user_id
 *           in: query
 *           required: true
 *           description: The User ID
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         company_employer_id:
 *                           type: integer
 *                         company_id:
 *                           type: integer
 *                         default:
 *                           type: boolean
 *                         super_admin:
 *                           type: boolean
 *                         company:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                             company_id:
 *                               type: integer
 *                             logo:
 *                               type: null
 *                         profile_url:
 *                           type: string
 *                         name:
 *                           type: string
 *                         industry:
 *                           type: array
 *                           items:
 *                             type: string
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/myteam:
 *     get:
 *       summary: Get Job Details   Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Job Details   Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: user_id
 *           in: query
 *           required: true
 *           description: The User ID
 *           schema:
 *             type: integer
 *         - name: roleTypeId
 *           in: query
 *           required: true
 *           description: The Role Type ID
 *           schema:
 *             type: integer
 *         - name: inviteStatusId
 *           in: query
 *           required: true
 *           description: The invite Status ID
 *           schema:
 *             type: integer
 *         - name: job_id
 *           in: query
 *           required: true
 *           description: The Job ID
 *           schema:
 *             type: integer
 *
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  roletypeId:
 *                    type: null
 *                  companyId:
 *                    type: null
 *                  companyName:
 *                    type: null
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        company_name:
 *                          type: integer
 *                        company_id:
 *                          type: integer
 *                        created_at:
 *                          type: string
 *                          format: date-time
 *                        role_type_id:
 *                          type: integer
 *                        user_id:
 *                          type: integer
 *                        employer_role_type:
 *                          type: integer
 *                        user:
 *                          type: object
 *                          properties:
 *                            first_name:
 *                              type: string
 *                            last_name:
 *                              type: string
 *                            email:
 *                              type: string
 *                              format: email
 *                            last_login_at:
 *                              type: string
 *                              format: date-time
 *                            is_verified:
 *                              type: integer
 *                            is_Logged_in:
 *                              type: integer
 *                        assigned_job:
 *                          type: string
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/roles:
 *     get:
 *       summary: Get Employer Roles Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Employer Roles Request
 *       tags:
 *         - Private
  
 *
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    default: success 
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        role_type_id:
 *                          type: integer
 *                        name:
 *                          type: string
  
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/getsecondarycompany:
 *     get:
 *       summary: Get Employer Secondary Company Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Employer Secondary Company Request
 *       tags:
 *         - Private
  
 *
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    default: success 
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                  pageNumber:
 *                      type: integer
  
  
 *         400:
 *           description: Bad Request.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/getCompanyVideoUrl:
 *     get:
 *       summary: Get Employer Company Video Url Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Employer Company Video Url Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: user_id
 *           in: query
 *           required: true
 *           description: The user ID
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        company_employer_id:
 *                          type: integer
 *                        company_id:
 *                          type: integer
 *                        default:
 *                          type: boolean
 *                        super_admin:
 *                          type: boolean
 *                        company:
 *                          type: object
 *                          properties:
 *                            name:
 *                              type: string
 *                            company_id:
 *                              type: integer
 *                            logo:
 *                              type: string
 *                            video:
 *                              type: string
 *                        user:
 *                          type: object
 *                          properties:
 *                            first_name:
 *                              type: string
 *                            last_name:
 *                              type: string
 *                        video_url:
 *                          type: string
 *                        name:
 *                          type: string
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/getEmployerJobVideos:
 *     get:
 *       summary: Get Employer Job Video Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Employer Job Video Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: lastKey
 *           in: query
 *           description: The user ID
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                  pageNumber:
 *                      type: integer
 
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/deleteEmployercamvideo:
 *     get:
 *       summary: Get Employer cam Video Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Employer cam Video Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: company_id
 *           in: query
 *           required: true
 *           description: The company ID
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    default: success
 *                  message:
 *                    type: string
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/deletejobvideo:
 *     get:
 *       summary: Get Delete Job Video Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Delete Job Video Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: job_id
 *           in: query
 *           required: true
 *           description: The job ID
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    default: success
 *                  message:
 *                    type: string
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/deleteSecondarycompany:
 *     get:
 *       summary: Delete Secondary Company Request
 *       security:
 *         - bearerAuth: []
 *       description: Delete Secondary Company Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: company_id
 *           in: query
 *           required: true
 *           description: The company ID
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    default: success
 *                  data:
 *                    type: integer
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/getcompanyapproverequest:
 *     get:
 *       summary: Get Company Approver Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Company Approver Request
 *       tags:
 *         - Private
 *       parameters:
 *         - name: company_id
 *           in: query
 *           required: true
 *           description: The company ID
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    default: success
 *                  data:
 *                    type: integer
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /job/create/basics:
 *     post:
 *       summary: Post Create Basics Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Create Basics Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: integer
 *                 job_title_id:
 *                   type: integer
 *                 job_role_type:
 *                   type: string
 *                 company_id:
 *                   type: integer
 *                 post_incognito:
 *                   type: boolean
 *                 is_video_require:
 *                   type: boolean
 *                 is_interview_require:
 *                   type: boolean
 *                 salary:
 *                   type: number
 *                 currency_id:
 *                   type: integer
 *                 industry_id:
 *                   type: array
 *                   items:
 *                     type: integer
 *                 hide_salary:
 *                   type: boolean
 *                 salary_negotiate:
 *                   type: boolean
 *                 job_start_date:
 *                   type: string
 *                   format: date
 *                 work_setup:
 *                   type: string
 *                 town_id:
 *                   type: integer
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: string
 *                 tools:
 *                   type: array
 *                   items:
 *                     type: string
 *                 experience:
 *                   type: integer
 *                 required_qualification_id:
 *                   type: integer
 *                 preferred_qualification_ids:
 *                   type: array
 *                   items:
 *                     type: integer
 *                 job_id:
 *                   type: integer
 *                 job_type:
 *                   type: string
 *                 own_transport:
 *                   type: boolean
 *                 own_equipment:
 *                   type: boolean
 *                 internet_access:
 *                   type: boolean
 *                 contract_duration:
 *                   type: string
 *                 language_ids:
 *                   type: array
 *                   items:
 *                     type: integer
 *                 nationality_ids:
 *                   type: array
 *                   items:
 *                     type: integer
 *                 association_ids:
 *                   type: array
 *                   items:
 *                     type: integer
 *                 skinz:
 *                   type: integer
 *                 gender:
 *                   type: string
 *                 skinz_flag:
 *                   type: boolean
 *                 gender_flag:
 *                   type: boolean
 *                 nationality_flag:
 *                   type: boolean
 *                 country_id:
 *                   type: integer
 *       responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                       job_id:
 *                         type: integer
 *                       user_id:
 *                         type: integer
 *                       company_id:
 *                         type: integer
 *                       post_incognito:
 *                         type: boolean
 *                       is_interview_require:
 *                         type: boolean
 *                       is_video_require:
 *                         type: boolean
 *                       skinz:
 *                         type: integer
 *                       gender:
 *                         type: string
 *                       nationality_flag:
 *                         type: boolean
 *                       skinz_flag:
 *                         type: boolean
 *                       gender_flag:
 *                         type: boolean
 *                       country_id:
 *                         type: integer
 *                       job_type:
 *                         type: string
 *                       title:
 *                         type: string
 *                       type:
 *                         type: string
 *                       salary_id:
 *                         type: array
 *                         items:
 *                           type: integer
 *                       hide_salary:
 *                         type: integer
 *                       job_start_date:
 *                         type: string
 *                       town_id:
 *                         type: integer
 *                       experience_id:
 *                         type: integer
 *                       work_setup:
 *                         type: string
 *                       salary_negotiate:
 *                         type: boolean
 *                       required_qualification_id:
 *                         type: integer
 *                       job_status_id:
 *                         type: integer
 *                       job_stage:
 *                         type: integer
 *                       own_transport:
 *                         type: boolean
 *                       own_equipment:
 *                         type: boolean
 *                       internet_access:
 *                         type: boolean
 *                       contract_duration:
 *                         type: string
 *                       description:
 *                         type: string
 *                       job_bio:
 *                         type: string
 *                       job_summary_flag:
 *                         type: boolean
 *                       job_spec:
 *                         type: string
 *                       approved_job_spec:
 *                         type: string
 *                       highest_qualification_id:
 *                         type: integer
 *                       start_date:
 *                         type: string
 *                       rate_id:
 *                         type: integer
 *                       display:
 *                         type: string
 *                       job_price:
 *                         type: string
 *                       grit_score:
 *                         type: integer
 *                       shared_image:
 *                         type: string
 *                       email_sent:
 *                         type: string
 *                       comments:
 *                         type: string
 *                       primary_personality:
 *                         type: integer
 *                       shadow_personality:
 *                         type: integer
 *                       is_remote:
 *                         type: boolean
 *                       role_responsibilty:
 *                         type: string
 *                       role_requirements:
 *                         type: string
 *                       job_notes:
 *                         type: string
 *                       job_video:
 *                         type: string
 *                       video_description:
 *                         type: string
 *                       candidate_video_complete_flag:
 *                         type: boolean
 *                       briefing_video_flag:
 *                         type: boolean
 *                       video_for_shortlisted_flag:
 *                         type: boolean
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /job/create/details:
 *     post:
 *       summary: Post Create Job Details Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Create Job Details Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 role_summary:
 *                   type: string
 *                   description: Description of the job role
 *                 role_responsibility:
 *                   type: string
 *                   description: Responsibilities associated with the job
 *                 role_requirements:
 *                   type: string
 *                   description: Requirements for the job role
 *                 job_id:
 *                   type: integer
 *                   description: ID of the job
 *                 job_bio:
 *                   type: string
 *                   description: Additional information about the job
 *                 job_summary_flag:
 *                   type: boolean
 *                   description: Flag indicating whether a job summary is included
 *                 job_notes:
 *                   type: string
 *                   description: Additional notes or comments about the job
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: string
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /job/create/culture:
 *     post:
 *       summary: Post Create Job Culture Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Create Job Culture Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 job_id:
 *                   type: integer
 *                   description: ID of the job
 *                 primary_personality:
 *                   type: integer
 *                   description: Primary personality ID
 *                 shadow_personality:
 *                   type: integer
 *                   description: Shadow personality ID
 *                 traits:
 *                   type: array
 *                   items:
 *                     type: integer
 *                   description: Array of trait IDs associated with users
 *                 screen_questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID of the screen question
 *                       question:
 *                         type: string
 *                         description: Text of the screen question
 *                   description: Array of screen questions
 *                 grit_score:
 *                   type: number
 *                   description: Grit score
 *                 user_id:
 *                   type: integer
 *                   description: ID of the user
 *                 candidate_video_complete_flag:
 *                   type: boolean
 *                   description: Flag indicating whether the candidate video is complete
 *                 video_description:
 *                   type: string
 *                   description: Description of the video
 *                 is_video_require:
 *                   type: boolean
 *                   description: Flag indicating whether video is required
 *                 video_for_shortlisted_flag:
 *                   type: boolean
 *                   description: Flag indicating whether video is required for shortlisted candidates
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: string
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron:{
      enabled:true,
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a231036edbaf305a8ef5656e0495fda3'),
    },
  },
});

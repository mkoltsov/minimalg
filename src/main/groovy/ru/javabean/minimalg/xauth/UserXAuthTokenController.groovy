package ru.javabean.minimalg.xauth;

import com.nimbusds.jose.JOSEException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/auth")
public class UserXAuthTokenController {
    def authenticationManager
    def userDetailsService

    @Autowired
    UserXAuthTokenController(AuthenticationManager am, UserDetailsService userDetailsService) {
        this.authenticationManager = am
        this.userDetailsService = userDetailsService
    }

    @RequestMapping(value = "/login", method = [RequestMethod.POST])
    def authorize(@RequestBody credentials, HttpServletRequest httpServletRequest) throws JOSEException {
        def email = credentials['email']
        def password = credentials['password']
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email, password)
        Authentication authentication = this.authenticationManager.authenticate(token)
        SecurityContextHolder.getContext().setAuthentication(authentication)

        UserDetails details = this.userDetailsService.loadUserByUsername(email)

        AuthUtils.createToken(httpServletRequest.getRemoteHost(), details.getUsername())
    }

}
